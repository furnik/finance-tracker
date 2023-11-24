import { Outlet } from "react-router-dom";
import { LayoutWrapper } from "./styles";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Outlet />
      <Footer />
    </LayoutWrapper>
  );
};
