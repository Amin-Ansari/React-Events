//React stuff
import { Suspense } from "react";

//Components and other pages
import EventsContainer from "../components/Structure/EventStructures/EventsContainer";

//React-Router stuff
import { useRouteLoaderData, Await } from "react-router-dom";

const AllEventsPage = () => {
  const events = useRouteLoaderData("all-events");

  return (
    <Suspense
      fallback={
        <p
          style={{ textAlign: "center", marginTop: "2rem", fontSize: "1.8rem" }}
        >
          Loading....
        </p>
      }
    >
      <Await resolve={events.allEvents}>
        {(resolvedEvents) => {
          return <EventsContainer fetchedEvents={resolvedEvents.events} />;
        }}
      </Await>
    </Suspense>
  );
};

export default AllEventsPage;
