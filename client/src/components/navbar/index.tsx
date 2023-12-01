import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../logo";
import { UserMenu } from "../user-menu";

export const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const links = [
    { path: "/", name: "dashboard" },
    { path: "/pokemons", name: "pokemons" },
    { path: "/items", name: "items" },
    { path: "/moves", name: "moves" },
  ];

  return (
    <nav className="w-full relative h-[80px] bg-white px-6 lg:px-10 flex  justify-between gap-x-4 shadow-sm z-40">
      <Logo />
      <div
        className={`flex gap-4 md:gap-8 px-4 md:items-center ${
          toggleMenu
            ? "flex flex-col absolute top-[80px] left-0 md:static md:flex-row bg-white w-full md:w-auto border-t-2 border-gray-200 md:border-transparent"
            : "hidden md:flex gap-4 md:gap-6"
        }`}
      >
        {links.map((link, index) => {
          const { path, name } = link;
          return (
            <NavLink
              to={path}
              key={index}
              className={({ isActive }) =>
                [
                  "relative inline uppercase py-4 font-semibold text-sm lg:text-md tracking-wider",
                  "hover:bg-gray-50 ",
                  "rounded-md transition",
                  isActive
                    ? "text-blue-400 before:absolute before:bg-blue-400 before:w-full before:h-1 before:bottom-0 before:right-0"
                    : "text-gray-800",
                ].join(" ")
              }
              onClick={() => setToggleMenu(false)}
            >
              {name}
            </NavLink>
          );
        })}
      </div>
      <UserMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    </nav>
  );
};
