import { Outlet } from "react-router-dom";
import { Wrapper } from "./styles";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Splash } from "@/components/Splash";
import { useRecoilValue } from "recoil";
import { appState } from "@/state/app";
import { authState } from "@/state/auth";

export const Layout = () => {
  const { loading } = useRecoilValue(appState);
  const { isAuth } = useRecoilValue(authState);

  if (loading) {
    return <Splash />;
  }

  return (
    <Wrapper>
      {isAuth && <Header />}
      <Outlet />
      {isAuth && <Footer />}
    </Wrapper>
  );
};
