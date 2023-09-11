import type * as Stitches from "@stitches/react";

import { createStitches } from "@stitches/react";

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
} = createStitches({
  media: {
    bp1: "(min-width: 480px)",
  },
  theme: {
    colors: {
      primary: "#FF385C",
      textPrimary: "black",
      textSecondary: "gray",
    },

    shadows: {
      l: "-1px 4px 10px 3px rgba(0,0,0,0.09);",
      m: "-1px 4px 10px 3px rgba(0,0,0,0.06);",
      s: "-1px 4px 10px 3px rgba(0,0,0,0.02);",
    },
  },
  utils: {
    bc: (value: Stitches.PropertyValue<"backgroundColor">) => ({
      backgroundColor: value,
    }),
    mx: (value: Stitches.PropertyValue<"margin">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<"margin">) => ({
      marginBottom: value,
      marginTop: value,
    }),

    shadow: () => ({}),
  },
});
