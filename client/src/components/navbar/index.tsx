import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../logo";
import { UserMenu } from "../user-menu";

export const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const links = [
    { path: "/", name: "dashboard" },
    { path: "/pokemons", name: "pokemons" },
    { path: "/items", name: "items" },
    { path: "/moves", name: "moves" },
  ];

  return (
    <nav className="w-full bg-white">
      <div className="h-[100px] flex items-center justify-between px-10 lg:px-16 shadow-md">
        {/* Primary menu and logo */}
        <Logo />
        <div className="hidden md:flex md:gap-4 lg:gap-8">
          {links.map((link, index) => {
            const { path, name } = link;
            return (
              <NavLink
                to={path}
                key={index}
                className={({ isActive }) =>
                  [
                    "px-4 py-2 uppercase font-semibold text-sm lg:text-md",
                    "hover:bg-gray-100 ",
                    "rounded-md transition",
                    isActive
                      ? "bg-gray-300 text-white hover:text-gray-700 shadow-md"
                      : "text-gray-800",
                  ].join(" ")
                }
              >
                <span>{name}</span>
              </NavLink>
            );
          })}
        </div>
        <div className="flex items-center md:hidden">
          <UserMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        </div>
      </div>
      {/* mobile navigation */}
      <div
        className={`fixed z-40 w-full bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-4 origin-top duration-200 ${
          !toggleMenu ? "h-0" : "h-full"
        }`}
      >
        <div className="py-4 px-10 flex flex-col gap-6 font-bold tracking-wider">
          {links.map((link, index) => {
            const { path, name } = link;
            return (
              <Link to={path} onClick={() => setToggleMenu(false)} key={index}>
                <span className="uppercase font-semibold text-sm lg:text-md">
                  {name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
