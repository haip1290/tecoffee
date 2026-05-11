import { Outlet } from "react-router";

import NavBar from "./NavBar";
import Socials from "../components/Socials.jsx";

import Footer from "./Footer";

const RootLayout = () => (
  <div className="flex flex-col min-h-screen">
    <NavBar />
    <main className="flex-1 flex flex-col">
      <Outlet />
    </main>
    <Socials />
    <Footer />
  </div>
);

export default RootLayout;
