import { styled } from "@stitches/react";

export const Button = styled("button", {
  backgroundColor: "gainsboro",
  borderRadius: "2rem",
  fontSize: "12px",
  fontWeight: "normal",
  padding: "8px 10px",
  width: "fit-content",
  display: "flex",

  variants: {
    color: {
      primary: {
        backgroundColor: "#FF385C",
        color: "white",
        "&:hover": {
          backgroundColor: "#ff002f",
          boxShadow: "-1px 4px 10px 3px rgba(0,0,0,0.2);",
        },
      },
      secondary: {
        backgroundColor: "gainsboro",
        "&:hover": {
          backgroundColor: "lightgray",
        },
      },
      text: {
        backgroundColor: "transparent",
      },
      textSecondary: {
        backgroundColor: "transparent",
        color: "gray",
      },
      outline: {
        backgroundColor: "White",
        border: "1px solid #eee",
        "&:hover": {
          boxShadow: "-1px 4px 10px 3px rgba(0,0,0,0.09);",
        },
      },
    },
  },
});
