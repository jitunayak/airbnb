import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { styled } from "@stitches/react";

export default function UserMenu() {
  const { logout } = useKindeAuth();
  return (
    <FloatWrapper>
      <MenuItem variant="primary">Messages</MenuItem>
      <MenuItem variant="primary">Notifications</MenuItem>
      <MenuItem variant="primary">Trips</MenuItem>
      <MenuItem variant="primary">Wishlist</MenuItem>
      <Divider />
      <MenuItem variant="seconday">Airbnb your home</MenuItem>
      <MenuItem variant="seconday">Account</MenuItem>
      <Divider />
      <MenuItem variant="seconday">Help Center</MenuItem>
      <MenuItem variant="danger" onClick={logout}>
        Logout
      </MenuItem>
    </FloatWrapper>
  );
}

const FloatWrapper = styled("div", {
  position: "absolute",
  zIndex: 11,
  backgroundColor: "White",
  border: "1px solid #eee",
  top: "5rem",
  right: "2rem",
  borderRadius: ".6rem",
  boxShadow: "-1px 4px 10px 3px rgba(0,0,0,0.1);",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  padding: ".6rem 0rem",
});
const Divider = styled("div", {
  width: "100%",
  height: "1px",
  backgroundColor: "#eee",
  margin: ".8rem 0rem",
});
const MenuItem = styled("div", {
  fontSize: "13px",
  minWidth: "12rem",
  padding: ".8rem 1rem",
  "&:hover": {
    backgroundColor: "#f6f6f6",
  },
  variants: {
    variant: {
      primary: {
        fontWeight: "600",
      },
      seconday: {
        fontWeight: "400",
      },
      danger: {
        color: "red",
        "&:hover": {
          fontWeight: "bold",
        },
      },
    },
  },
});
