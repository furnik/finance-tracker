import {
  createBrowserRouter,
  RouterProvider as Provider,
} from "react-router-dom";
import { LayoutPage } from "@/pages/Layout";
import { MainPage } from "@/pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        path: "finance-tracker",
        element: <MainPage />,
      },
    ],
  },
]);

export const RouterProvider = () => <Provider router={router} />;
