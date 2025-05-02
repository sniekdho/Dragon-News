import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
      },
    ],
  },
  {
    path: "/auth",
    element: <h3>Authentication Layout</h3>,
  },
  {
    path: "/news",
    element: <h3>News Layout</h3>,
  },
  {
    path: "/*",
    element: <h3>Error404</h3>,
  },
]);

export default router;
