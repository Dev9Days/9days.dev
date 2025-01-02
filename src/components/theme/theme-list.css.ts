import { createVar, style } from '@vanilla-extract/css';

const backgroundColor = createVar();
const fontColor = createVar();
const totalHeight = createVar();

export const themeListContainer = style({
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
  backgroundColor,
  ':hover': {
    height: totalHeight,
  },
  '@media': {
    'screen and (min-width: 640px)': {
      minWidth: '125px',
    },
  },
});

export const themeList = style({
  width: '100%',
  height: '100%',
  ':hover': {
    backgroundColor: fontColor,
  },
});

export const vars = { backgroundColor, fontColor, totalHeight };
