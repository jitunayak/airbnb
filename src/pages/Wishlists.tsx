import { useApi } from '@/hooks';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { styled } from '@stitches/react';
import { useQuery } from '@tanstack/react-query';

import HomeResultItem from '../components/HomeResultItem';

function Wishlists() {
  const { wishlistApi } = useApi();
  const { user } = useKindeAuth();
  const { data, isError, isLoading, isSuccess } = useQuery({
    queryFn: () => wishlistApi.getWishLists(user?.id || ''),
    queryKey: ['wishlists'],
  });

  return (
    <Container>
      <div style={{ fontSize: '50px' }}>Wishlists</div>
      {isLoading && <div style={{ margin: '4rem' }}>loading...</div>}
      {isError && <div style={{ margin: '4rem' }}> unable to fetch</div>}
      {!isLoading && (
        <ResultContainer>
          {isSuccess &&
            data.map((item) => {
              return (
                <HomeResultItem isWishListed={true} item={item} key={item.id} />
              );
            })}
        </ResultContainer>
      )}
    </Container>
  );
}

export default Wishlists;

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  margin: '4rem',
});

const ResultContainer = styled('div', {
  alignContent: 'space-around',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  justifyContent: 'space-around',
  //   zIndex: "1",
  //   top: "1rem",
  //   position: "absolute",
  //   marginTop: "10rem",
});
