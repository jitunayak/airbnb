import { styled } from "../stitches.config";

export const Button = styled("button", {
  alignItems: "center",
  backgroundColor: "gainsboro",
  borderRadius: "2rem",
  defaultVariants: {
    shadow: "0",
  },
  display: "flex",
  fontSize: "12px",
  fontweight: "600",
  gap: ".2rem",
  height: "fit-content",
  justifyContent: "center",
  justifyItems: "center",
  variants: {
    color: {
      outline: {
        "&:hover": {
          boxShadow: "-1px 4px 10px 3px rgba(0,0,0,0.09);",
        },
        backgroundColor: "White",
        border: "1px solid #eee",
      },
      primary: {
        "&:hover": {
          backgroundColor: "#ff002f",
          boxShadow: "-1px 4px 10px 3px rgba(0,0,0,0.2);",
        },
        backgroundColor: "#FF385C",
        color: "white",
      },
      primaryDark: {
        "&:hover": {
          boxShadow: "-1px 4px 10px 3px rgba(0,0,0,0.2);",
          opacity: ".9",
        },
        backgroundColor: "#1a1a1a",
        color: "white",
      },
      secondary: {
        "&:hover": {
          backgroundColor: "lightgray",
        },
        backgroundColor: "gainsboro",
      },
      text: {
        backgroundColor: "transparent",
      },
      textSecondary: {
        backgroundColor: "transparent",
        color: "gray",
      },
    },
    gap: {
        
      l: {
        gap: "1.6rem",
      },
      m: {
        gap: "1.2rem",
      },
      s: {
        gap: "1rem",
      },
      xs: {
        gap: ".6rem",
      },
    },
    round: {
      l: {
        borderRadius: "2rem",
      },
      m: {
        borderRadius: "1rem",
      },
      s: {
        borderRadius: ".6rem",
      },
      xl: {
        borderRadius: "100%",
      },
    },
    shadow: {
      0: {},
      1: {
        "&:hover": {
          boxShadow: "-1px 4px 10px 3px rgba(0,0,0,0.2)",
        },
        boxShadow: "-1px 4px 10px 3px rgba(0,0,0,0.1)",
      },
    },
    size: {
      l: {
        padding: "12px 14px",
      },
      m: {
        padding: "10px 12px",
      },
      s: {
        padding: "8px 10px",
      },
      xs: { padding: "4px 6px" },
    },
  },
  width: "fit-content",
});
