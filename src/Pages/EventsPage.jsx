//Components and other pages
import ResponsiveContainer from "../components/UI/ResponsiveContainer";
import EventNavigation from "../components/Structure/EventStructures/EventNavigation";

//React-Router stuff
import { Outlet } from "react-router";

const EventsPage = () => {
  return (
    <ResponsiveContainer>
      <EventNavigation />
      <Outlet />
    </ResponsiveContainer>
  );
};

export default EventsPage;
