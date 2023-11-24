import { Outlet } from "react-router-dom";
import { LayoutWrapper } from "./styles";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SplashPage } from "@/pages/Splash";

interface LayoutProps {
  loading: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ loading }) => {
  if (loading) {
    return <SplashPage />;
  }

  return (
    <LayoutWrapper>
      <Header />
      <Outlet />
      <Footer />
    </LayoutWrapper>
  );
};
