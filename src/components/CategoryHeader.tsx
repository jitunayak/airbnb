import { styled } from "@stitches/react";
import { useState } from "react";

interface ICategory {
  url: string;
  title: string;
}
function CategoryHeader() {
  const categories: ICategory[] = [
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
    {
      url: "https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg",
      title: "Domes",
    },
    {
      url: "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
      title: "Rooms",
    },
    {
      url: "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
      title: "Historical Home",
    },
    {
      url: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
      title: "Coutryside",
    },
    {
      url: "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
      title: "Cabins",
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
              src={category.url}
              alt=""
              width="20"
              height="20"
              style={isSelectedItem(category) ? {} : { opacity: ".5" }}
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
  width: "100%",
  height: "2px",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "#ccc",
  },

  variants: {
    color: {
      primary: {
        backgroundColor: "Black",
      },
      invisible: {
        backgroundColor: "transparent",
      },
      secondary: {
        backgroundColor: "#ccc",
      },
    },
  },
});
export const ListContainer = styled("span", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  alignContent: "center",
  cursor: "pointer",
  gap: ".4rem",
});
export const ListWrapper = styled("span", {
  display: "flex",
  gap: "2rem",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
});
export const TitleText = styled("span", {
  fontSize: "13px",
  fontWeight: "500",
  color: "gray",
  whiteSpace: "nowrap",

  "&:hover": {
    color: "Black",
  },
  defaultVariants: {
    color: "secondary",
  },
  variants: {
    color: {
      primary: {
        color: "black",
      },
      secondary: { color: "gray" },
    },
  },
});
