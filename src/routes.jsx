import { createBrowserRouter } from "react-router";

import RootLayout from "./components/RootLayout";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "menu", element: <Menu /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
