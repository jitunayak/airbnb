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
  position: "fixed",
  zIndex: "9",
  backgroundColor: "White",
  width: "100%",
  top: 0,
  paddingTop: "1rem",
});

const Line = styled("span", {
  width: "100%",
  height: "1px",
  backgroundColor: "#eee",
  display: "flex",
  margin: "1rem",
});
