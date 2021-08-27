import { createGlobalStyle } from 'styled-components';
import Reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${Reset};
  
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0 auto;
    height: 100vh;
    background-color:#FFFEFA;
  }

  button {
    outline: 0;
    border: 0;
  }
`;

export default GlobalStyles;
