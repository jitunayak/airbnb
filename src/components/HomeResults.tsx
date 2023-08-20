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
  price: 0,
  images: [
    `https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg
              `,
  ],
} as IRoom;

function HomeResults() {
  const { user } = useKindeAuth();
  const { roomsApi, wishlistApi } = useApi();

  const wishlists = useQuery({
    queryKey: ["wishlists"],
    queryFn: () => wishlistApi.getWishLists(user?.id || ""),
  });

  const { data, isLoading, fetchNextPage, isSuccess, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["homeResult"],
      queryFn: ({ pageParam = 1 }) => roomsApi.fetchRooms(pageParam),
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      getPreviousPageParam: (firstPage) => firstPage.prevCursor,
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
          page.data.map((item) => (
            <HomeResultItem
              item={item}
              key={item.id}
              isWishListed={
                !!wishlists.data?.find((wishlist) => wishlist.id === item.id)
              }
            />
          ))
        )}
        {hasNextPage &&
          new Array(4)
            .fill(1)
            .map((__, index) => (
              <HomeResultItem
                key={index}
                item={placeholderData}
                isWishListed={false}
              />
            ))}
      </ResultContainer>
    </div>
  );
}

const ResultContainer = styled("div", {
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  gap: "1rem",
  alignContent: "space-around",
  zIndex: "1",
  top: "1rem",
  position: "absolute",
  marginTop: "10rem",
});

export default HomeResults;
