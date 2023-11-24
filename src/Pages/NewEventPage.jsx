//Components and other pages
import EventForm from "../components/Structure/Forms/EventForm";
const NewEventPage = () => {
  return (
    <>
      <h2>Add a new Event</h2>
      <EventForm formMethod="POST" />
    </>
  );
};

export default NewEventPage;
