import {
  createBrowserRouter,
  RouterProvider as Provider,
} from "react-router-dom";
import { MainPage } from "../../pages/Main";
import { LayoutPage } from "../../pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
    ],
  },
]);

export const RouterProvider = () => <Provider router={router} />;
