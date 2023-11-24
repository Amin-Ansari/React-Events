//React-Router stuff
import { useRouteLoaderData } from "react-router-dom";

//Components and other pages
import EventForm from "../components/Structure/Forms/EventForm";

//CSS and other assets
import "./EventEditPage.css";

const EventEditPage = () => {
  const data = useRouteLoaderData("event-details");
  return (
    <>
      <h2 className="event-edit-tile">Edit the {data.event.title} Event</h2>
      <EventForm method="PATCH" defValues={data.event} />
    </>
  );
};

export default EventEditPage;
