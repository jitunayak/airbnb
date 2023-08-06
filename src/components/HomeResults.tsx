/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from "@stitches/react";
import { useQuery } from "@tanstack/react-query";
import useApi from "../hooks/useApi";
import HomeResultItem from "./HomeResultItem";

function HomeResults() {
  const { fetchRooms } = useApi();

  const { data, isLoading } = useQuery({
    queryKey: ["searchResult"],
    queryFn: fetchRooms,
    staleTime: 1000 * 60 * 60,
  });

  if (isLoading && !data) {
    return <span>loading...</span>;
  }

  return (
    <ResultContainer>
      {data &&
        data?.map((item) => {
          return <HomeResultItem item={item} key={item.id} />;
        })}
    </ResultContainer>
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
