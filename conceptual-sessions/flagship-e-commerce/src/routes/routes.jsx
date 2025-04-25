import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <p>Error Page</p>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>  fetch('../phones.json')
      },
      {
        path: 'about',
        Component: About
      }
    ]
  },
]);

export default router;