import { styled } from "@stitches/react";
import CategoryHeader from "./CategoryHeader";
import Filters from "./Filters";

function CategoryActionBar() {
  return (
    <HeaderWrapper>
      <CategoryHeader />
      <Filters/>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled("span", {
  display: "flex",
  alignSelf: "center",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
});
export default CategoryActionBar;
