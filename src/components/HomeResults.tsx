/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from "@stitches/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useEffect } from "react";
import useApi from "../hooks/useApi";
import { IRoom } from "../types/IRoom";
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
  const { fetchRooms } = useApi();

  const { data, isLoading, fetchNextPage, isSuccess } = useInfiniteQuery({
    queryKey: ["homeResult"],
    queryFn: ({ pageParam = 1 }) => fetchRooms(pageParam),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    getPreviousPageParam: (firstPage) => firstPage.prevCursor,
    staleTime: 1000 * 60 * 60,
    onSuccess: () => {
      console.log("fetched paged result");
    },
  });

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      console.log("reached end");
      fetchNextPage();
      return;
    }
    return;
  }, [fetchNextPage, isLoading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  if (isLoading || !data || !isSuccess) {
    return <span style={{ fontSize: "30px" }}>loading...</span>;
  }

  return (
    <div>
      <ResultContainer>
        {data.pages.map((page) =>
          page.data.map((item) => <HomeResultItem item={item} key={item.id} />)
        )}
        {new Array(4).fill(1).map((__, index) => (
          <HomeResultItem key={index} item={placeholderData} />
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
