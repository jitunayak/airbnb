import { styled } from "@stitches/react";
import React, { useState } from "react";
import { HeartIcon } from "../assets/HeartIcon";
import LeftArrowIcon from "../assets/LeftArrowIcon";
import RightArrowIcon from "../assets/RightArrowIcon";
import { StarIcon } from "../assets/StarIcon";
import { IRoom } from "../types/IRoom";

interface IProps {
  item: IRoom;
}
const HomeResultItem: React.FC<IProps> = ({ item }) => {
  const [thumbnailIndex, setthumbnailIndex] = useState(0);

  const thumbnailIndexIncrement = () => {
    setthumbnailIndex((prev) => (prev < item.images.length ? prev + 1 : prev));
  };
  const thumbnailIndexDecrement = () => {
    setthumbnailIndex((prev) => (prev !== 0 ? prev - 1 : prev));
  };
  const isLastIndex = () => thumbnailIndex === item.images.length - 1;

  const imageSlidingIndicator = (item: IRoom) => {
    return (
      <span style={{}}>
        {Array(item.images.length)
          .fill(0)
          .map((__, index) => {
            return (
              <span
                style={{
                  color: "white",
                  opacity: thumbnailIndex === index ? "1" : ".7",
                  fontSize: thumbnailIndex === index ? "50px" : "40px",
                }}
              >
                .
              </span>
            );
          })}
      </span>
    );
  };
  const ImageSliderControl = () => {
    return (
      <>
        <RoundIcon onClick={thumbnailIndexDecrement}>
          <LeftArrowIcon />
        </RoundIcon>
        {!isLastIndex() && (
          <RoundIcon onClick={thumbnailIndexIncrement}>
            <RightArrowIcon />
          </RoundIcon>
        )}
      </>
    );
  };

  return (
    <ItemWrapper>
      <div
        style={{
          height: "300px",
          width: "300px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardImage src={item.images[thumbnailIndex]} height={300} width={300} />
        <HeartIconWrapper>
          <HeartIcon />
        </HeartIconWrapper>
        <ImageSliderControlWrapper>
          <ImageSliderControl />
        </ImageSliderControlWrapper>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            marginTop: "25%",
          }}
        >
          {imageSlidingIndicator(item)}
        </div>
      </div>
      <CardTitle>
        <span style={{ fontWeight: "600", fontSize: "14px" }}>
          {item.address.market},{item.address.country}
        </span>
        <RatingWrapper>
          <StarIcon />
          <span style={{ fontSize: "13px" }}>{item.rating}</span>
        </RatingWrapper>
      </CardTitle>
      <div style={{ marginTop: "1rem" }}>
        <span style={{ fontWeight: "600", fontSize: "13px" }}>
          ₹{item.price}
        </span>{" "}
        <span style={{ fontWeight: "normal", fontSize: "13px" }}>night</span>
      </div>
    </ItemWrapper>
  );
};

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

const HeartIconWrapper = styled("span", {
  position: "absolute",
  paddingLeft: "260px",
  paddingTop: "10px",
});

const CardImage = styled("img", {
  borderRadius: "1rem",
  position: "absolute",
  zIndex: "-1",
});

const RoundIcon = styled("span", {
  borderRadius: "100%",
  backgroundColor: "White",
  padding: "0.5rem",
  display: "flex",
  height: "min-content",
  width: "min-content",
  opacity: ".6",
  scale: "0.9",
  "&:hover": {
    opacity: "1",
    scale: "1",
  },
});

const ImageSliderControlWrapper = styled("span", {
  display: "flex",
  width: "90%",
  justifyContent: "space-between",
  alignSelf: "center",
  marginTop: "45%",
});

export default HomeResultItem;
