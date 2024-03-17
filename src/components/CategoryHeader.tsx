import { styled } from "@stitches/react";
import { useState } from "react";

interface ICategory {
  title: string;
  url: string;
}
function CategoryHeader() {
  const categories: ICategory[] = [
    {
      title: "Farms",
      url: "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
    },
    {
      title: "Amazing Views",
      url: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
    },
    {
      title: "Amazing Pools",
      url: "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
    },
    {
      title: "Domes",
      url: "https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg",
    },
    {
      title: "Rooms",
      url: "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
    },
    {
      title: "Historical Home",
      url: "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
    },
    {
      title: "Coutryside",
      url: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
    },
    {
      title: "Cabins",
      url: "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
    },
  ];

  const [selectedCategory, setselectedCategory] = useState<ICategory>(
    categories[0]
  );

  const isSelectedItem = (category: ICategory) =>
    selectedCategory.title === category.title;

  return (
    <ListWrapper>
      {categories.map((category) => {
        return (
          <ListContainer onClick={() => setselectedCategory(category)}>
            <img
              alt=""
              height="20"
              src={category.url}
              style={isSelectedItem(category) ? {} : { opacity: ".5" }}
              width="20"
            ></img>
            <TitleText
              color={isSelectedItem(category) ? "primary" : "secondary"}
            >
              {category.title}
            </TitleText>
            <Underline
              color={isSelectedItem(category) ? "primary" : "invisible"}
            />
          </ListContainer>
        );
      })}
    </ListWrapper>
  );
}

export default CategoryHeader;

const Underline = styled("span", {
  "&:hover": {
    backgroundColor: "#ccc",
  },
  backgroundColor: "transparent",
  height: "2px",
  variants: {
    color: {
      invisible: {
        backgroundColor: "transparent",
      },
      primary: {
        backgroundColor: "Black",
      },
      secondary: {
        backgroundColor: "#ccc",
      },
    },
  },

  width: "100%",
});
export const ListContainer = styled("span", {
  alignContent: "center",
  alignItems: "center",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  gap: ".4rem",
});
export const ListWrapper = styled("span", {
  alignContent: "center",
  alignItems: "center",
  display: "flex",
  gap: "2rem",
  justifyContent: "center",
  overflowX: "hidden",
});
export const TitleText = styled("span", {
  "&:hover": {
    color: "Black",
  },
  color: "gray",
  defaultVariants: {
    color: "secondary",
  },
  fontSize: "13px",

  fontWeight: "500",
  variants: {
    color: {
      primary: {
        color: "black",
      },
      secondary: { color: "gray" },
    },
  },
  whiteSpace: "nowrap",
});
