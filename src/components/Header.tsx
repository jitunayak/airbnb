import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { styled } from "@stitches/react";
import { useRef, useState } from "react";

import { AirBnbIcon, HumBurgerIcon } from "../assets";
import { Button } from "./Button";
import { Divider } from "./Divider";
import UserMenu from "./UserMenu";
import { useNavigate } from "@tanstack/react-router";
import { useOutsideClick } from "../hooks";

function Header() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, login, user } = useKindeAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(menuRef, () => setShowUserMenu(false));

  //   console.log(user && user);
  //   console.log(user && getPermissions().permissions);
  return (
    <HeaderWrapper>
      <span onClick={() => navigate({ to: "/" })} style={{ cursor: "pointer" }}>
        <AirBnbIcon />
      </span>
      <Button color="outline" shadow="1" style={{ marginLeft: "4rem" }}>
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
          <Button
            color={"outline"}
            gap="xs"
            onClick={() => setShowUserMenu(!showUserMenu)}
            onMouseEnter={() => setShowUserMenu(true)}
            round={"l"}
            size={"xs"}
          >
            <HumBurgerIcon />
            <RoundIcon>{user?.given_name?.charAt(0)}</RoundIcon>
          </Button>
        )}
        {showUserMenu && <UserMenu menuRef={menuRef} />}
        {!user && !isLoading && (
          <Button onClick={() => login({})}>Login</Button>
        )}
      </GroupWrapper>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled("div", {
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  margin: "0rem 2rem",
});
const RoundIcon = styled("span", {
  alignItems: "center",
  backgroundColor: "black",
  borderRadius: "100%",
  color: "white",
  cursor: "pointer",
  display: "flex",
  fontSize: "10px",
  fontWeight: "500",
  height: "16px",
  justifyContent: "center",
  padding: "0.5rem",
  width: "16px",
});

const GroupWrapper = styled("span", {
  alignItems: "center",
  display: "inline-flex",
  gap: "1rem",
  justifyContent: "center",
  position:'relative'
});
