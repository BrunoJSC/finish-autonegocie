import { Button } from "@/components/ui/button";
import { LinksDashboard } from "@/constants";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="w-full border-b px-8 py-4 flex items-center justify-between">
      <nav className="flex items-center gap-5">
        {LinksDashboard.map(({ title, href }) => (
          <Link
            key={title}
            to={href}
            className="text-primary font-bold hover:text-black transition-colors duration-300 ease-in-out"
          >
            {title}
          </Link>
        ))}
      </nav>

      <Button
        variant="destructive"
        onClick={() => {
          signOut(auth);
        }}
      >
        Sair
      </Button>
    </header>
  );
}
