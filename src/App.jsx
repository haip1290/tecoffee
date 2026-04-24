import "./App.css";
import { RouterProvider } from "react-router";
import routes from "./routes.jsx";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

const App = () => {
  return <RouterProvider router={routes}></RouterProvider>;
};

export default App;
