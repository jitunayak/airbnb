import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { styled } from "@stitches/react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useCallback, useEffect } from "react";

import useApi from "../hooks/useApi";
import { IRoom } from "../types";
import HomeResultItem from "./HomeResultItem";

const placeholderData = {
  address: {
    country: "N/A",
    market: "loading...",
    street: "loading...",
  },
  images: [
    `https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg
              `,
  ],
  price: 0,
} as IRoom;

function HomeResults() {
  const { user } = useKindeAuth();
  const { roomsApi, wishlistApi } = useApi();

  const wishlists = useQuery({
    queryFn: () => wishlistApi.getWishLists(user?.id || ""),
    queryKey: ["wishlists"],
  });

  const { data, fetchNextPage, hasNextPage, isLoading, isSuccess } =
    useInfiniteQuery({
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      getPreviousPageParam: (firstPage) => firstPage.prevCursor,
      queryFn: ({ pageParam = 1 }) => roomsApi.fetchRooms(pageParam),
      queryKey: ["homeResult"],
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  if (isLoading || !data || !isSuccess || wishlists.isLoading) {
    return <span style={{ fontSize: "30px" }}>loading...</span>;
  }

  return (
    <div>
      <ResultContainer>
        {data.pages.map((page) =>
          page.data.map((item: IRoom) => (
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
    </div>
  );
}

const ResultContainer = styled("div", {
  alignContent: "space-around",
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  justifyContent: "space-around",
  marginTop: "10rem",
  position: "absolute",
  top: "1rem",
  zIndex: "1",
});

export default HomeResults;
