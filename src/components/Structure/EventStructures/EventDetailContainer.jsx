//React-Router stuff
import { Link, useSubmit, json, redirect } from "react-router-dom";

//Css files and other assets
import "./EventDetailContainer.css";

const EventDetailContainer = (porps) => {
  const submitTheDelete = useSubmit();
  const { eventDetail } = porps;

  const deleteEventHandler = () => {
    const deletePropt = window.confirm(
      "Are you sure that you want to delete this event?"
    );
    if (deletePropt) submitTheDelete(null, { method: "DELETE" });
  };

  return (
    <>
      <h1 className="event-detial-title">
        {eventDetail ? eventDetail.title : ""}
      </h1>
      <img
        className="event-detail-image"
        src={eventDetail ? eventDetail.image : ""}
      />
      <p className="event-detail-description">
        {eventDetail ? eventDetail.description : ""}
      </p>
      <p className="event-detail-date">{eventDetail ? eventDetail.date : ""}</p>
      <ul className="detail-footer-link-list">
        <li className="detail-footer-link-item">
          <Link to={"edit"}>Edit</Link>
        </li>
        <li className="detail-footer-link-item">
          <button onClick={deleteEventHandler} className="delete-button">
            Delete
          </button>
        </li>
      </ul>
    </>
  );
};

export default EventDetailContainer;

export const deleteAction = async ({ request, params }) => {
  const { eventId: id } = params;
  const { method } = request;
  const deleteRequest = await fetch("http://localhost:8080/events/" + id, {
    method: method
  });
  if (!deleteRequest.ok)
    return json(
      { message: "Couldn't delete the event!" },
      { status: deleteRequest.status, statusText: deleteRequest.statusText }
    );

  return redirect("..");
};
