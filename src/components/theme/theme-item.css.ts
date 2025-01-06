import { createVar, style } from '@vanilla-extract/css';

const themeFontColor = createVar();

export const ThemeItem = style({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '6px',
  padding: '4px',
  width: '100%',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: themeFontColor,
  },
});

export const vars = { themeFontColor };
