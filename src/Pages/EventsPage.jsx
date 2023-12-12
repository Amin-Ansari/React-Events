//Components and other pages
import Section from "../components/UI/Section";
import ResponsiveContainer from "../components/UI/ResponsiveContainer";
import EventNavigation from "../components/Structure/EventStructures/EventNavigation";

//React-Router stuff
import { Outlet, json, defer } from "react-router";

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

const defferedEventsLoader = async () => {
  const request = await fetch("http://localhost:8080/events/");
  if (request.ok) {
    const events = await request.json();
    return events;
  }
  return json(
    { message: "Loading Events Failed!" },
    { status: request.status, statusText: request.statusText }
  );
};

export const eventsLoader = async () => {
  return defer({ allEvents: defferedEventsLoader() });
};
