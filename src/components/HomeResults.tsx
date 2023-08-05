/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from "@stitches/react";
import { useQuery } from "@tanstack/react-query";
import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import { HeartIcon } from "../assets/HeartIcon";
import { StarIcon } from "../assets/StarIcon";
import useApi from "../hooks/useApi";

function HomeResults() {
  const { fetchHomePageResults } = useApi();

  const { data, isLoading } = useQuery({
    queryKey: ["searchResult"],
    queryFn: fetchHomePageResults,
    staleTime: 1000 * 60 * 60,
  });

  if (isLoading) {
    return <span>loading...</span>;
  }

  return (
    <ResultContainer>
      {data.records.map(
        (item: {
          fields: {
            medium_url: string | undefined;
            smart_location:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | ReactPortal
              | null
              | undefined;
            review_scores_rating: number;
            price: number;
          };
        }) => {
          return (
            <ItemWrapper>
              <div style={{ height: "250px", width: "250px" }}>
                <img
                  style={{
                    aspectRatio: "cover",
                    borderRadius: "1rem",
                    position: "absolute",
                  }}
                  src={item.fields.medium_url}
                  height={250}
                  width={250}
                />
                <span
                  style={{
                    position: "absolute",
                    paddingLeft: "215px",
                    paddingTop: "8px",
                  }}
                >
                  <HeartIcon />
                </span>
              </div>
              <CardTitle>
                <span style={{ fontWeight: "600", fontSize: "14px" }}>
                  {item.fields.smart_location}
                </span>
                <RatingWrapper>
                  <StarIcon />
                  <span style={{ fontSize: "13px" }}>
                    {item.fields.review_scores_rating / 10}
                  </span>
                </RatingWrapper>
              </CardTitle>
              <div style={{ marginTop: "1rem" }}>
                <span style={{ fontWeight: "600", fontSize: "13px" }}>
                  ₹{Number(item.fields.price * 82.71).toFixed()}
                </span>{" "}
                <span style={{ fontWeight: "normal" }}>night</span>
              </div>
            </ItemWrapper>
          );
        }
      )}
    </ResultContainer>
  );
}

const ResultContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "1rem",
  marginTop: "12rem",
  zIndex: "1",
});

const CardTitle = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  marginTop: ".5rem",
});

const RatingWrapper = styled("span", {
  gap: ".4rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const ItemWrapper = styled("div", {});

export default HomeResults;
