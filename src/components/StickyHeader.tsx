import { styled } from "@stitches/react";

import CategoryActionBar from "./CategoryActionBar";
import Header from "./Header";

function StickyHeader() {
  return (
    <StickyHeaderWrapper>
      <Header />
      <Line />
      <CategoryActionBar />
    </StickyHeaderWrapper>
  );
}
export default StickyHeader;

const StickyHeaderWrapper = styled("div", {
  paddingTop: "1rem",
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: "9",
  backgroundColor: "white",
});

const Line = styled("span", {
  backgroundColor: "#eee",
  display: "flex",
  height: "1px",
  margin: "1rem",
  width: "100%",
});
