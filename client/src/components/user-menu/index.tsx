export interface userMenuProps {
  toggleMenu: boolean;
  setToggleMenu: (toggleMenu: boolean) => void;
}

export const UserMenu = ({ toggleMenu, setToggleMenu }: userMenuProps) => {
  return (
    <div className="flex justify-center items-center text-grey gap-x-2">
      {/* <img
        src="/images/avatar.svg"
        alt="Avatar image"
        className="rounded-full bg-gray-50"
      /> */}
      <button onClick={() => setToggleMenu(!toggleMenu)} className="md:hidden">
        {toggleMenu ? (
          <img src="/icons/close.svg" alt="Close menu icon" />
        ) : (
          <img src="/icons/menu.svg" alt="Open menu icon" />
        )}
      </button>
    </div>
  );
};
