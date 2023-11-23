//React-Router stuff
import { Link } from "react-router-dom";

//Css files and other assets
import "./EventDetailContainer.css";

const EventDetailContainer = (porps) => {
  const { eventDetail } = porps;

  return (
    <>
      <h1 className="event-detial-title">{eventDetail.title}</h1>
      <img className="event-detail-image" src={eventDetail.image} />
      <p className="event-detail-description">{eventDetail.description}</p>
      <p className="event-detail-date">{eventDetail.date}</p>
      <ul className="detail-footer-link-list">
        <li className="detail-footer-link-item">
          <Link to={"edit"}>Edit</Link>
        </li>
        <li className="detail-footer-link-item">
          <Link to={"/events/new-event"} className="new-link">
            New
          </Link>
        </li>
      </ul>
    </>
  );
};

export default EventDetailContainer;
