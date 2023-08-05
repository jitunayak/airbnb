import { styled } from "@stitches/react";
import { useState } from "react";

function CategoryHeader() {
  const [categories, setCategories] = useState<
    { url: string; title: string }[]
  >([
    {
      url: "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
      title: "Farms",
    },
    {
      url: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
      title: "Amazing Views",
    },
    {
      url: "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
      title: "Amazing Pools",
    },
  ]);
  return (
    <Group>
      {categories.map((category) => {
        return (
          <Stack>
            <img src={category.url} alt="" width="24" height="24"></img>
            <TitleText>{category.title}</TitleText>
          </Stack>
        );
      })}
    </Group>
  );
}

export default CategoryHeader;

export const Stack = styled("span", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  alignContent: "center",
  cursor: "pointer",
});
export const Group = styled("span", {
  display: "inline-flex",
  gap: "2rem",
  marginTop: "2rem",
});
export const TitleText = styled("span", {
  fontSize: "13px",
  color: "gray",
  "&:hover": {
    color: "Black",
  },
});
