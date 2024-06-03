import { useApi } from '@/hooks';
import { IRoom } from '@/types';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { styled } from '@stitches/react';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useCallback, useEffect } from 'react';

import HomeResultItem from './HomeResultItem';

const placeholderData = {
  address: '',
  images: [
    {
      id: '1',
      url: `https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg`,
    },
  ],
  price: {
    discountedPrice: 0,
    originalPrice: 0,
    serviceCharge: 0,
  },
} as IRoom;

function HomeResults() {
  const { user } = useKindeAuth();
  const { roomsApi, wishlistApi } = useApi();

  //   const queryClient = useQueryClient();

  const wishlists = useQuery({
    enabled: !!user?.id,
    queryFn: () => wishlistApi.getWishLists(user?.id || ''),
    queryKey: ['wishlists'],
  });

  const { data, fetchNextPage, hasNextPage, isLoading, isSuccess } =
    useInfiniteQuery({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      getNextPageParam: (lastPage: any) => lastPage.nextCursor,
      getPreviousPageParam: (firstPage) => firstPage.prevCursor,
      initialPageParam: 1,
      queryFn: ({ pageParam = 1 }) => roomsApi.fetchRooms(pageParam),
      queryKey: ['homeResult'],
    });

  const handleScroll = useCallback(async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      if (hasNextPage) {
        await fetchNextPage();
      }
      return;
    }
    return;
  }, [fetchNextPage, hasNextPage, isLoading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  if (isLoading || !data || !isSuccess) {
    return <span style={{ fontSize: '30px' }}>loading...</span>;
  }

  return (
    <>
      {/* <Button
        onClick={() => queryClient.invalidateQueries([user?.id, "wishlists"])}
      >
        Refresh
      </Button> */}
      <ResultContainer>
        {data.pages.map((page) =>
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (page as any).data.map((item: IRoom) => (
            <HomeResultItem
              isWishListed={
                !!wishlists.data?.find((wishlist) => wishlist.id === item.id)
              }
              item={item}
              key={item.id}
            />
          ))
        )}
        {hasNextPage &&
          new Array(4)
            .fill(1)
            .map((__, index) => (
              <HomeResultItem
                isWishListed={false}
                item={placeholderData}
                key={index}
              />
            ))}
      </ResultContainer>
    </>
  );
}

const ResultContainer = styled('div', {
  '@media (min-width: 425px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@media (min-width: 768px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  '@media (min-width: 1024px)': {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  alignContent: 'space-between',
  display: 'grid',
  gap: '1rem',
  marginTop: '10rem',
  position: 'absolute',
  top: '1rem',
  zIndex: '1',
});

export default HomeResults;
