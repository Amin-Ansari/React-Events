//React-Router stuff
import { NavLink } from "react-router-dom";

//Css files and other assets
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <nav>
      <ul className="nav-links-list">
        <li className="link-items">
          <NavLink
            to={""}
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
            end
          >
            Home
            <span className="hover-effect"></span>
          </NavLink>
        </li>
        <li className="link-items">
          <NavLink
            to={"events"}
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            Events
            <span className="hover-effect"></span>
          </NavLink>
        </li>
        <li className="link-items">
          <NavLink to={"newsletter"} end>
            Newsletter
            <span className="hover-effect"></span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
