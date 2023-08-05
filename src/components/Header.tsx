import { styled } from "@stitches/react";
import { AirBnbIcon } from "./AirBnbIcon";
import { Button } from "./Button";
import { Divider } from "./Divider";
function Header() {
  return (
    <HeaderWrapper>
      <AirBnbIcon />
      <Button color={"outline"}>
        <Button color={"text"}>Anywhere</Button>
        <Divider />
        <Button color={"text"}>Any week</Button>
        <Divider />
        <Button color={"textSecondary"}>Add guest</Button>
        <Button color={"primary"}>Search</Button>
      </Button>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled("div", {
  display: "grid",
  width: "100%",
  alignItems: "center",
  gridTemplateColumns: "repeat(3,auto)",
  marginLeft: "2rem",
});
