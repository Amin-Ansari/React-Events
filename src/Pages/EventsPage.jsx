//Components and other pages
import Section from "../components/UI/Section";
import ResponsiveContainer from "../components/UI/ResponsiveContainer";
import EventNavigation from "../components/Structure/EventStructures/EventNavigation";

//React-Router stuff
import { Outlet } from "react-router";

const EventsPage = () => {
  return (
    <Section>
      <ResponsiveContainer>
        <EventNavigation />
        <Outlet />
      </ResponsiveContainer>
    </Section>
  );
};

export default EventsPage;
