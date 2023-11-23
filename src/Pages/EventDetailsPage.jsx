//Components and other pages
import ResponsiveContainer from "../components/UI/ResponsiveContainer";
import EventDetailContainer from "../components/Structure/EventStructures/EventDetailContainer";

//React-Router stuff
import { json, useLoaderData } from "react-router-dom";

const EventDetailPage = () => {
  const eventDetails = useLoaderData();
  return (
    <ResponsiveContainer>
      <EventDetailContainer eventDetail={eventDetails.event} />
    </ResponsiveContainer>
  );
};

export default EventDetailPage;

export const eventDetailLoader = async ({ params }) => {
  const { eventId: Id } = params;
  const eventRequest = await fetch(`http://localhost:8080/events/${Id}`);

  if (eventRequest.ok) return eventRequest;
  return json(
    { message: "Coudn't fetch the event Details!" },
    { status: eventRequest.status, statusText: eventRequest.statusText }
  );
};
