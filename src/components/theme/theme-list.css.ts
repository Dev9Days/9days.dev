import { createVar, style } from '@vanilla-extract/css';

const backgroundColor = createVar();
const totalHeight = createVar();

export const themeItemList = style({
  overflow: 'hidden',
  position: 'absolute',
  top: '12px',
  right: '36px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  height: '40px',
  borderRadius: '6px',
  transition: 'height 0.3s linear',
  ':hover': {
    backgroundColor,
    height: totalHeight,
  },
  '@media': {
    'screen and (min-width: 640px)': {
      minWidth: '125px',
    },
  },
});

export const vars = { backgroundColor, totalHeight };
