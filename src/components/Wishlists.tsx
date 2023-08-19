import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { styled } from "@stitches/react";
import { useQuery } from "@tanstack/react-query";
import useApi from "../hooks/useApi";
import HomeResultItem from "./HomeResultItem";

function Wishlists() {
  const { getWishLists } = useApi();
  const { user } = useKindeAuth();
  const { data, isLoading } = useQuery({
    queryKey: ["wishlists"],
    queryFn: () => getWishLists(user?.id ?? ""),
  });

  return (
    <Container>
      <div style={{ fontSize: "50px" }}>Wishlists</div>
      {isLoading && <div style={{ margin: "4rem" }}>loading...</div>}
      {!isLoading && (
        <ResultContainer>
          {data?.map((item) => {
            return (
              <HomeResultItem item={item} key={item.id} isWishListed={true} />
            );
          })}
        </ResultContainer>
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

const ResultContainer = styled("div", {
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  gap: "1rem",
  alignContent: "space-around",
  //   zIndex: "1",
  //   top: "1rem",
  //   position: "absolute",
  //   marginTop: "10rem",
});
