import { createTheme } from '@material-ui/core';

const paddings = {
  sidePadding: '5rem',
};

const colors = {
  bg: '#FFFEFA',
  grayPrimary: '#AAAAAA',
  grayButton: '#FBFBFB',
  greenPrimary: '#1D8170',
  grayProgressBar: '#222222',
};

const fontSizes = {
  s: '12px',
  m: '14px',
  l: '18px',
  xl: '24px',
  xxl: '36px',
};

const theme = createTheme({
  paddings,
  colors,
  fontSizes,
});

export default theme;
