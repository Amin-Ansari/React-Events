//Css files and other assets
import "./EventsContainer.css";

//React-Router stuff
import { Link } from "react-router-dom";

const renderTheEvents = (eventsArray) => {
  return eventsArray.map((item, index) => (
    <li key={index} className="event">
      <Link to={item.id} className="events-backdrop">
        <div className="image-section">
          <img src={item.image} />
        </div>
        <div className="context-section">
          <div>
            <h2 className="title">{item.title}</h2>
            <p className="description">{item.description}</p>
          </div>
          <p className="date-style">{item.date}</p>
        </div>
      </Link>
    </li>
  ));
};

const EventsContainer = (props) => {
  const { fetchedEvents } = props;
  console.log(fetchedEvents);
  return (
    <div className="events-container">
      <ul className="events-list">{renderTheEvents(fetchedEvents)}</ul>
    </div>
  );
};

export default EventsContainer;
