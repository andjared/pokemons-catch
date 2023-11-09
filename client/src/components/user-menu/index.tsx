export interface userMenuProps {
  toggleMenu: () => void;
  isMenuActive: boolean;
}

export const UserMenu = ({ toggleMenu, isMenuActive }: userMenuProps) => {
  return (
    <div className="flex justify-center items-center text-grey gap-x-2">
      <img
        src="/images/avatar.svg"
        alt="Avatar image"
        className="rounded-full bg-gray-50"
      />
      <button onClick={toggleMenu} className="md:hidden">
        {isMenuActive ? (
          <img src="/icons/close.svg" alt="Arrow down icon" />
        ) : (
          <img src="/icons/menu.svg" alt="Arrow down icon" />
        )}
      </button>
    </div>
  );
};
