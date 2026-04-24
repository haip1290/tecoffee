import { createBrowserRouter } from "react-router";
import { Outlet } from "react-router";

import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Menu from "./pages/Menu";

const RootLayout = () => (
  <>
    <NavBar />
    <main>
      <Outlet />
    </main>
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "menu", element: <Menu /> },
    ],
  },
]);

export default router;
