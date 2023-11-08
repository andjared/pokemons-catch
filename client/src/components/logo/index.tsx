import { Link } from "react-router-dom";
export const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src="/images/logo.svg" alt="Pokemon logo" />
      </Link>
    </div>
  );
};
