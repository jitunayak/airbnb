import type * as Stitches from '@stitches/react';

import { createStitches } from '@stitches/react';

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
    bp1: '(min-width: 480px)',
  },
  theme: {
    colors: {
      primary: '#FF385C',
      textPrimary: 'black',
      textSecondary: 'gray',
    },

    shadows: {
      l: '-1px 4px 10px 3px rgba(0,0,0,0.09);',
      m: '-1px 4px 10px 3px rgba(0,0,0,0.06);',
      s: '-1px 4px 10px 3px rgba(0,0,0,0.02);',
    },
  },
  utils: {
    bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),
    mb: (value: Stitches.PropertyValue<'margin'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
    }),
    mr: (value: Stitches.PropertyValue<'margin'>) => ({
      marginRight: value,
    }),
    mt: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
    }),
    mx: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'margin'>) => ({
      marginBottom: value,
      marginTop: value,
    }),

    pb: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
    }),
    pr: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingRight: value,
    }),
    pt: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value,
    }),
    px: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingBottom: value,
      paddingTop: value,
    }),

    shadow: () => ({}),
  },
});
