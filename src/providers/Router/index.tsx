import {
  createBrowserRouter,
  RouterProvider as Provider,
} from "react-router-dom";
import { SplashPage } from "../../pages/Splash";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashPage />,
  },
]);

export const RouterProvider = () => <Provider router={router} />;
