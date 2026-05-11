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
      <div>
        <Link to="/">
          <img
            src={logo}
            alt="Te Logo"
            className="w-24 h-auto hover:grayscale"
          />
        </Link>
      </div>
      <ul className="flex items-stretch">
        {navLinks.map((link) => (
          <li key={link.name} className="flex">
            <Link
              to={link.path}
              className="flex items-center px-10 transition-colors hover:bg-primary h-full"
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
