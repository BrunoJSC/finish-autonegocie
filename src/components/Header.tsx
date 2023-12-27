import { NAV_LINK } from "@/constants";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ToggleMenu } from "./ToggleMenu";

export function Header() {
  const pathname = window.location.pathname;
  return (
    <header className="w-full mx-auto bg-white border-b 2xl:max-w-7xl flex items-center justify-between p-4">
      <Link to="/">
        <img src={logo} alt="Logo" className="h-10 w-20 bg-cover" />
      </Link>

      <ToggleMenu className="md:hidden block" />

      <nav className="md:flex gap-4 items-center hidden">
        {NAV_LINK.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={`font-bold hover:text-primary transition duration-300 ${
              pathname === link.href ? "text-primary" : "text-black"
            }`}
          >
            {link.label}
          </Link>
        ))}

        <Button asChild>
          <Link to="/anunciar">Anunciar</Link>
        </Button>
      </nav>
    </header>
  );
}
