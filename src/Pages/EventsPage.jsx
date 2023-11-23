//Components and other pages
import Section from "../components/UI/Section";
import ResponsiveContainer from "../components/UI/ResponsiveContainer";
import EventNavigation from "../components/Structure/EventStructures/EventNavigation";

//React-Router stuff
import { Outlet, json } from "react-router";

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

export const eventsLoader = async () => {
  const request = await fetch("http://localhost:8080/events/");
  if (request.ok) return request;
  return json(
    { message: "Loading Events Failed!" },
    { status: request.status, statusText: request.statusText }
  );
};
