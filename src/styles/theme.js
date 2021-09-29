import { createTheme } from '@material-ui/core';
import { css } from 'styled-components';

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const serviceWidth = {
  default: '1760px',
};

const paddings = {
  sidePadding: '5rem',
};

const colors = {
  bg: '#FFFEFA',
  grayPrimary: '#AAAAAA',
  graySecondary: '#777777',
  grayButton: '#FBFBFB',
  grayActionBtn: '#818181',
  blackPrimary: '#000000',
  greenPrimary: '#1D8170',
  grayProgressBar: '#222222',
  centerNode: '#F7F6F0',
  branchNode: '#F5F4EE',
  yellowPrimary: '#F6F5EE',
};

const fontSizes = {
  s: '12px',
  m: '14px',
  l: '18px',
  xl: '24px',
  xxl: '36px',
};

const borderRadius = {
  s: '12px',
  m: '14px',
  base: '16px',
  l: '18px',
};

const actionBtnPos = {
  plus: 'right: -30%; top: -75%;',
  edit: 'right: 10%; top: -90%;',
  cancel: 'right: -40%;',
  check: 'left: -40%;',
};

const theme = createTheme({
  serviceWidth,
  paddings,
  colors,
  fontSizes,
  borderRadius,
  flexCenter,
  actionBtnPos,
});

export default theme;
