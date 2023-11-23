//React-Router
import { NavLink } from "react-router-dom";

//Css files and other assets
import "./EventNavigation.css";

const EventNavigation = () => {
  return (
    <div className="event-nav-container">
      <ul className="events-nav-list">
        <li>
          <NavLink
            to={"/events"}
            className={({ isActive }) =>
              isActive ? "activate-button" : undefined
            }
            end
          >
            All Events
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"new-event"}
            className={({ isActive }) =>
              isActive ? "activate-button" : undefined
            }
            end
          >
            New Event
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default EventNavigation;
