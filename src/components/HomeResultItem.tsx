import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { styled } from "@stitches/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { HeartIcon } from "../assets/HeartIcon";
import LeftArrowIcon from "../assets/LeftArrowIcon";
import RightArrowIcon from "../assets/RightArrowIcon";
import { StarIcon } from "../assets/StarIcon";
import useApi from "../hooks/useApi";
import { IRoom } from "../types";

interface IProps {
  item: IRoom;
  isWishListed: boolean;
}
const HomeResultItem: React.FC<IProps> = ({ item, isWishListed = false }) => {
  const [thumbnailIndex, setthumbnailIndex] = useState(0);
  const { user } = useKindeAuth();
  const { addToWishlists, removeFromWishlists } = useApi();

  const queryClient = useQueryClient();

  const addToWishListMutation = useMutation({
    mutationFn: (data: IRoom) => addToWishlists(user?.id || "", data),
    onSuccess: (newData) => {
      queryClient.invalidateQueries({
        queryKey: [user?.id || "", "wishlists"],
      });
      queryClient.setQueryData(["wishlists"], (old) =>
        old.length > 0 ? [...old, newData] : [newData]
      );
    },
  });

  const removeFromWishListMutation = useMutation({
    mutationFn: (data: IRoom) => removeFromWishlists(user?.id || "", data),
    // mutationKey: "wishlists",
    onSuccess: () => {},
  });

  const thumbnailIndexIncrement = () => {
    setthumbnailIndex((prev) => (prev < item.images.length ? prev + 1 : prev));
  };
  const thumbnailIndexDecrement = () => {
    setthumbnailIndex((prev) => (prev !== 0 ? prev - 1 : prev));
  };
  const isLastIndex = () => thumbnailIndex === item.images.length - 1;

  const imagePositionIndicatorRenderer = (index: number) => (
    <span
      key={index}
      style={{
        color: "white",
        userSelect: "none",
        opacity: thumbnailIndex === index ? "1" : ".7",
        fontSize: thumbnailIndex === index ? "50px" : "40px",
      }}
    >
      .
    </span>
  );

  const imageSlidingIndicator = (item: IRoom) => {
    return (
      <div>
        {Array(item.images.length)
          .fill(1)
          .map((__, index) => {
            return imagePositionIndicatorRenderer(index);
          })}
      </div>
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
      <ImageWrapper>
        <CardImage src={item.images[thumbnailIndex]} height={300} width={300} />
        <HeartIconWrapper
          onClick={() =>
            isWishListed
              ? removeFromWishListMutation.mutateAsync(item)
              : addToWishListMutation.mutateAsync(item)
          }
        >
          <HeartIcon color={isWishListed ? "red" : "transparent"} />
        </HeartIconWrapper>
        <ImageSliderControlWrapper>
          <ImageSliderControl />
        </ImageSliderControlWrapper>
        <ImagePositionIndicator>
          {imageSlidingIndicator(item)}
        </ImagePositionIndicator>
      </ImageWrapper>
      <CardTitle>
        <Title>
          {item.address.market},{item.address.country}
        </Title>
        <RatingWrapper>
          <StarIcon />
          <span style={{ fontSize: "13px" }}>{item.rating}</span>
        </RatingWrapper>
      </CardTitle>
      <div style={{ marginTop: "1rem" }}>
        <Price>₹{item.price.toLocaleString()}</Price>
        <span style={{ fontWeight: "normal", fontSize: "13px" }}> night</span>
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
  cursor: "pointer",
});
const Title = styled("span", { fontWeight: "600", fontSize: "14px" });

const Price = styled("span", { fontWeight: "600", fontSize: "13px" });

const RoundIcon = styled("span", {
  borderRadius: "100%",
  backgroundColor: "White",
  padding: "0.5rem",
  display: "flex",
  height: "min-content",
  width: "min-content",
  opacity: "0",
  scale: "0.9",
  transition: "all 0.5s ease-in-out",
  "&:hover": {
    opacity: "1",
    scale: "1",
  },
});

const ImageWrapper = styled("div", {
  height: "300px",
  width: "300px",
  display: "flex",
  flexDirection: "column",
  "&:hover": {
    [`& ${RoundIcon}`]: {
      opacity: ".8",
    },
  },
});
const CardImage = styled("img", {
  borderRadius: "1rem",
  position: "absolute",
  zIndex: "-1",
  objectFit: "cover",
  overflow: "hidden",
});

const ImageSliderControlWrapper = styled("span", {
  display: "flex",
  width: "90%",
  justifyContent: "space-between",
  alignSelf: "center",
  marginTop: "45%",
});

const ImagePositionIndicator = styled("span", {
  display: "flex",
  justifyContent: "center",
  marginTop: "25%",
});
export default HomeResultItem;
