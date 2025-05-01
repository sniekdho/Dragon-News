import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
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
