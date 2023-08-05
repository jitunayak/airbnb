import { styled } from "@stitches/react";

function CategoryHeader() {
  const categories: { url: string; title: string }[] = [
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
  ];
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
  display: "flex",
  gap: "2rem",
  marginTop: "2rem",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
});
export const TitleText = styled("span", {
  fontSize: "13px",
  color: "gray",
  "&:hover": {
    color: "Black",
  },
});
