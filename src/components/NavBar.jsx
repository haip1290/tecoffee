import logo from "../assets/logo/logo.png";
import { Link } from "react-router";

const NavBar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "menu" },
    { name: "Manifesto", path: "manifesto" },
    { name: "Contact Us", path: "contact" },
  ];
  return (
    <nav className="flex justify-center items-stretch gap-2 h-24">
      <div className="mr-4">
        <Link to="/" className="">
          <img
            src={logo}
            alt="Te Logo"
            className="w-24 h-auto hover:grayscale"
          />
        </Link>
      </div>
      <ul className="flex items-center gap-2">
        {navLinks.map((link) => (
          <li key={link.name} className="flex">
            <Link
              to={link.path}
              className="flex px-10 py-6 text-primary font-medium rounded-full transition-all duration-300 hover:text-primary hover:bg-primary/4"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
