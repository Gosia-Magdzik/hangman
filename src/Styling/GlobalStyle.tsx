import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');
    font-family: 'Poppins', sans-serif;
    margin: 0 auto;
    background-color: #7A95C2;
  }
`;

