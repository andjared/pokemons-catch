import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { Logo } from "../logo";
import { UserMenu } from "../user-menu";

export const NavBar = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuActive(!isMenuActive);
  };

  useEffect(() => {
    if (window?.innerWidth > 768) {
      setIsMenuActive(true);
    }
  }, []);

  return (
    <nav className="relative flex items-center justify-between h-[80px] w-full px-6 md:px-8 shadow-md">
      <Logo />
      <div
        className={clsx(
          isMenuActive
            ? "absolute md:static top-[84px] left-0 w-full flex flex-col justify-around md:flex-row md:gap-x-4 lg:gap-x-6 md:justify-center gap-y-4 p-4 z-10 bg-white"
            : "hidden"
        )}
      >
        <Link to="/">
          <span className="uppercase font-semibold text-sm lg:text-md x">
            Dashboard
          </span>
        </Link>
        <Link to="/pokedex">
          <span className="uppercase font-semibold text-sm lg:text-md">
            Pokedex
          </span>
        </Link>
        <Link to="/items">
          <span className="uppercase font-semibold text-sm lg:text-md">
            Items
          </span>
        </Link>
        <Link to="/moves">
          <span className="uppercase font-semibold text-sm lg:text-md">
            Moves
          </span>
        </Link>
      </div>
      <UserMenu isMenuActive={isMenuActive} toggleMenu={toggleMenu} />
    </nav>
  );
};
