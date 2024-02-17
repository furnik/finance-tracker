import {
  Navigate,
  createBrowserRouter,
  RouterProvider as Provider,
} from "react-router-dom";
import { LayoutPage } from "@/pages/Layout";
import { MainPage } from "@/pages/Main";
import { AuthPage } from "@/pages/Auth";
import { useRecoilValue } from "recoil";
import { authState } from "@/state/auth";

const publicRoutes = [
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "*",
    element: <Navigate to="/auth" replace />,
  },
];

const privateRoutes = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];

const router = (isAuth: boolean) =>
  createBrowserRouter([
    {
      element: <LayoutPage />,
      children: isAuth ? privateRoutes : publicRoutes,
    },
  ]);

export const RouterProvider = () => {
  const { isAuth } = useRecoilValue(authState);

  return <Provider router={router(isAuth)} />;
};
