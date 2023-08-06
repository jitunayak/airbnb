import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { styled } from "@stitches/react";
import { AirBnbIcon } from "../assets/AirBnbIcon";
import HumBurgerIcon from "../assets/HumBurgerIcon";
import { Button } from "./Button";
import { Divider } from "./Divider";
function Header() {
  const { login, user, isAuthenticated, isLoading, getPermissions } =
    useKindeAuth();

  console.log(user && user);
  console.log(user && getPermissions().permissions);

  return (
    <HeaderWrapper>
      <AirBnbIcon />
      <Button color="outline" shadow="1">
        <Button color="text">Anywhere</Button>
        <Divider />
        <Button color="text">Any week</Button>
        <Divider />
        <Button color="textSecondary">Add guest</Button>
        <Button color="primary">Search</Button>
      </Button>

      <GroupWrapper>
        <Button color={"text"}>Airbnb your home</Button>
        {isAuthenticated && !isLoading && user && (
          <Button color={"outline"} size={"xs"} gap="xs" round={"l"}>
            <HumBurgerIcon />
            <RoundIcon>{user?.given_name?.charAt(0)}</RoundIcon>
          </Button>
        )}
        {!user && <Button onClick={() => login({})}>Login</Button>}
      </GroupWrapper>
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
const RoundIcon = styled("span", {
  borderRadius: "100%",
  color: "white",
  fontWeight: "500",
  backgroundColor: "black",
  justifyContent: "center",
  alignItems: "center",
  padding: "0.5rem",
  display: "flex",
  height: "16px",
  width: "16px",
  fontSize: "10px",
  cursor: "pointer",
});

const GroupWrapper = styled("span", {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
});
