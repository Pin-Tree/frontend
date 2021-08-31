import { createGlobalStyle } from 'styled-components';
import Reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${Reset};
  
  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    margin: 0 auto;
    background-color:#FFFEFA;
  }

  #root {
    height: 100%;
  }

  button {
    outline: 0;
    border: 0;
  }
`;

export default GlobalStyles;
