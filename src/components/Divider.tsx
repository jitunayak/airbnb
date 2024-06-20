import { styled } from '@stitches/react';

export const Divider = styled('div', {
  alignSelf: 'center',
  backgroundColor: '$gray200',
  variants: {
    color: {
      invisible: {
        backgroundColor: 'transparent',
      },
      primary: {
        backgroundColor: 'Black',
      },
      secondary: {
        backgroundColor: '#ccc',
      },
    },
    orientation: {
      horizontal: {
        height: '1px',
        width: '100%',
      },
      vertical: {
        height: '100%',
        width: '1px',
      },
    },
  },
  width: '1px',
});
