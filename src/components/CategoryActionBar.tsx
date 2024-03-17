import { styled } from "@stitches/react";

import CategoryHeader from "./CategoryHeader";
import Filters from "./Filters";

function CategoryActionBar() {
  return (
    <HeaderWrapper>
      <CategoryHeader />
      <Filters />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled("span", {
  alignContent: "center",
  alignItems: "center",
  alignSelf: "center",
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
  overflow: "hidden",
});
export default CategoryActionBar;
