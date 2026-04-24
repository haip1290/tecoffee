import logo from "../assets/logo/logo.png";
import { Link } from "react-router";

const NavBar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "menu" },
  ];
  return (
    <nav className="flex flex-col items-center gap-4">
      <div>
        <Link to="/">
          <img src={logo} alt="Te Logo" className="w-24 h-auto" />
        </Link>
      </div>
      <ul className="flex items-center">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link to={link.path} className="px-10 py-5">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
