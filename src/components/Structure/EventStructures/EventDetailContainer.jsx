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
    </>
  );
};

export default EventDetailContainer;
