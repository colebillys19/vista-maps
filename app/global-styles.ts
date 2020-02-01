import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body * {
    font-family: 'Lato', sans-serif;
    font-size: 2rem;
  }
  .MuiPopover-paper {
    min-width: 0px !important;
  }
  .MuiList-root {
    padding: 0;
  }
`;

export default GlobalStyle;
