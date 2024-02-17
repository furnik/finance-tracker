import { PropsWithChildren } from "react";
import { ThemeProvider as Provider } from "styled-components";
import { palette } from "@/constants/pallete";
import { GlobalStyles } from "@/styles";

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <Provider theme={palette.dark}>
    <GlobalStyles />
    {children}
  </Provider>
);
