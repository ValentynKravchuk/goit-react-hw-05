import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
const Header = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
