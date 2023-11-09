import { Link } from "react-router-dom";
import { Logo } from "../logo";
import { UserMenu } from "../user-menu";

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between  h-[80px] w-full px-6 md:px-8 shadow-md">
      <Logo />
      <div className="hidden md:flex items-center justify-between gap-x-6">
        <Link to="/">
          <span className="uppercase font-semibold text-sm lg:text-md x">
            Dashboard
          </span>
        </Link>
        <Link to="/">
          <span className="uppercase font-semibold text-sm lg:text-md">
            Pokedex
          </span>
        </Link>
        <Link to="/">
          <span className="uppercase font-semibold text-sm lg:text-md">
            Items
          </span>
        </Link>
        <Link to="/">
          <span className="uppercase font-semibold text-sm lg:text-md">
            Moves
          </span>
        </Link>
      </div>
      <UserMenu />
    </nav>
  );
};