import { Link } from "react-router-dom";
import { Logo } from "../logo";

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-around gap-x-6 h-[100px] w-full px-8">
      <Logo />
      <div className="flex items-center justify-between gap-x-6">
        <Link to="/">
          <span className="uppercase font-medium text-md">Dashboard</span>
        </Link>
        <Link to="/">
          <span className="uppercase font-medium text-md">Pokedex</span>
        </Link>
        <Link to="/">
          <span className="uppercase font-medium text-md">Items</span>
        </Link>
        <Link to="/">
          <span className="uppercase font-medium text-md">Moves</span>
        </Link>
      </div>
      <div>user</div>
    </nav>
  );
};
