import { ADMIN_LINK } from "@/constants";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";

export function Header() {
  return (
    <header className="w-full mx-auto bg-white border-b 2xl:max-w-7xl flex items-center justify-between p-4">
      <Link to="/">
        <img src={logo} alt="Logo" className="h-10 w-20 bg-cover" />
      </Link>

      <nav className="md:flex gap-4 items-center hidden">
        {ADMIN_LINK.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="font-bold hover:text-primary transition duration-300"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Button onClick={() => signOut(auth)} variant="destructive">
        Sair
      </Button>
    </header>
  );
}
