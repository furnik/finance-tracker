import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Inria Sans", sans-serif !important;
    background: ${({ theme }) => theme.background};
    height: 100%;
  }
  #root, html{
    height: 100%;
  }
  input {
    font-family: inherit;
    &::placeholder {
      font-family: inherit
    }
  }
  button {
    font-family: inherit;
  }
`;
