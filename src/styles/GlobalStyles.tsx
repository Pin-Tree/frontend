import { createGlobalStyle } from 'styled-components';
import Reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${Reset};

  body {
    margin: 0 auto;
    height: 100vh;
    background-color:#FFFEFA;
  }
`;

export default GlobalStyles;
