import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NAV_LINK } from "@/constants";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

interface ToggleMenuProps {
  className: string;
}

export function ToggleMenu({ className }: ToggleMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={className}>
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 h-52">
        {NAV_LINK.map((link) => (
          <DropdownMenuItem key={link.href}>
            <Link to={link.href}>{link.label}</Link>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button className="w-full" asChild>
            <Link to="/anunciar">Anunciar</Link>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
