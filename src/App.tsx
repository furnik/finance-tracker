import { ThemeProvider } from "styled-components";
import { palette } from "@/constants/pallete";
import { GlobalStyles } from "./styles";
import { RouterProvider } from "@/providers/Router";

export const App = () => {
  return (
    <ThemeProvider theme={palette.dark}>
      <GlobalStyles />
      <RouterProvider />
    </ThemeProvider>
  );
};
