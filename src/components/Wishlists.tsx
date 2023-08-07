import { styled } from "@stitches/react";
import { useQuery } from "@tanstack/react-query";
import useApi from "../hooks/useApi";
import HomeResultItem from "./HomeResultItem";

function Wishlists() {
  const { getWishLists } = useApi();
  const { data, isLoading } = useQuery(["wishlists"], getWishLists);
  return (
    <Container>
      <div style={{ fontSize: "50px" }}>Wishlists</div>
      {isLoading && <div style={{ margin: "4rem" }}>loading...</div>}
      {!isLoading && (
        <>
          {data?.map((item) => {
            return <HomeResultItem item={item} key={item.id} />;
          })}
        </>
      )}
    </Container>
  );
}

export default Wishlists;

const Container = styled("div", {
  margin: "4rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
});
