import { styled } from "@stitches/react";

export const Button = styled("button", {
  backgroundColor: "gainsboro",
  borderRadius: "2rem",
  fontSize: "12px",
  width: "fit-content",
  fontweight: "600",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  justifyItems: "center",
  height: "fit-content",
  gap: ".2rem",
  defaultVariants: {
    shadow: "0",
  },
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
    round: {
      s: {
        borderRadius: ".6rem",
      },
      m: {
        borderRadius: "1rem",
      },
      l: {
        borderRadius: "2rem",
      },
      xl: {
        borderRadius: "100%",
      },
    },
    size: {
      xs: { padding: "4px 6px" },
      s: {
        padding: "8px 10px",
      },
      m: {
        padding: "10px 12px",
      },
      l: {
        padding: "12px 14px",
      },
    },
    gap: {
      xs: {
        gap: ".6rem",
      },
      s: {
        gap: "1rem",
      },
      m: {
        gap: "1.2rem",
      },
      l: {
        gap: "1.6rem",
      },
    },
    shadow: {
      0: {},
      1: {
        boxShadow: "-1px 4px 10px 3px rgba(0,0,0,0.1)",
        "&:hover": {
          boxShadow: "-1px 4px 10px 3px rgba(0,0,0,0.2)",
        },
      },
    },
  },
});
