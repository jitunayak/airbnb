import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { styled } from "@stitches/react";
import { AirBnbIcon } from "../assets/AirBnbIcon";
import { Button } from "./Button";
import { Divider } from "./Divider";
function Header() {
  const { login, user, isAuthenticated, isLoading, getPermissions } =
    useKindeAuth();

  console.log(user);
  console.log(getPermissions().permissions);

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

      {isAuthenticated && !isLoading && user && <span>{user?.given_name}</span>}
      {!user && <Button onClick={() => login({})}>Login</Button>}
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
