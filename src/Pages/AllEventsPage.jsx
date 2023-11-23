//Components and other pages
import EventsContainer from "../components/Structure/EventStructures/EventsContainer";

//React-Router stuff
import { useRouteLoaderData } from "react-router-dom";

const AllEventsPage = () => {
  const events = useRouteLoaderData("all-events");
  return <EventsContainer fetchedEvents={events.events} />;
};

export default AllEventsPage;
