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
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
  },
  theme: {
    br: {
      l: '16px',
      m: '8px',
      s: '4px',
    },

    colors: {
      gray50: '#fafafa',
      gray100: '#f5f5f5',
      gray200: '#e5e5e5',
      gray300: '#d4d4d4',
      gray400: '#a3a3a3',
      gray500: '#737373',
      gray600: '#525252',
      gray700: '#404040',
      gray800: '#262626',

      primary: '#FF385C',
      textPrimary: 'black',
      textSecondary: 'gray',
    },
    fontSizes: {
      h1: '42px',
      h2: '36px',
      h3: '32px',
      h4: '28px',
      h5: '24px',
      h6: '20px',
      l: '18px',
      m: '16px',
      s: '14px',
      sh: '24px',
      xs: '12px',
    },

    radii: {
      l: '16px',
      m: '8px',
      s: '4px',
    },

    shadows: {
      l: '-1px 4px 10px 3px rgba(0,0,0,0.09);',
      m: '-1px 4px 10px 3px rgba(0,0,0,0.06);',
      s: '-1px 4px 10px 3px rgba(0,0,0,0.02);',
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '48px',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '48px',
    },
  },
  utils: {
    bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),

    border1: (color: Stitches.PropertyValue<'borderColor'>) => ({
      border: '1px solid ' + color,
    }),
    border2: (color: Stitches.PropertyValue<'borderColor'>) => ({
      border: '2px solid ' + color,
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
