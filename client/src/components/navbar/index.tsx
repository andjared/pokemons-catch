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
    <nav className="w-full relative bg-white px-6 py-4 lg:px-10 flex items-center justify-between gap-x-4 shadow-sm">
      <Logo />
      <div
        className={`flex gap-4 md:gap-6 ${
          toggleMenu
            ? "flex flex-col absolute top-[80px] left-0 p-6 md:p-0 md:static md:flex-row bg-white w-full md:w-auto border-t-2 border-gray-200 md:border-transparent"
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
                  "px-4 py-2 uppercase font-semibold text-sm lg:text-md tracking-wider",
                  "hover:bg-gray-50 ",
                  "rounded-md transition",
                  isActive
                    ? "bg-gray-400 text-white hover:text-gray-700 shadow-md"
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
