//React-Router
import { Form } from "react-router-dom";

//Css files and other assets
import "./EventForm.css";

const EventForm = (props) => {
  const { formMethod, defValues } = props;
  return (
    <Form method={formMethod} className="event-form">
      <label className="label-style" htmlFor="title-input">
        Title
      </label>
      <input
        type="text"
        id="title-input"
        name="title"
        className="input-style"
        defaultValue={defValues.title ? defValues.title : ""}
      ></input>

      <label className="label-style" htmlFor="image-input">
        Image
      </label>
      <input
        type="text"
        id="image-input"
        name="image"
        className="input-style"
        defaultValue={defValues.title ? defValues.image : ""}
      ></input>

      <label className="label-style" htmlFor="image-input">
        Date
      </label>
      <input
        type="date"
        id="image-input"
        name="image"
        className="input-style"
        defaultValue={defValues.title ? defValues.date : ""}
      ></input>

      <label className="label-style" htmlFor="description-text">
        Description
      </label>
      <textarea
        id="description-text"
        name="description"
        className="description-text-area"
        defaultValue={defValues.description ? defValues.description : ""}
      ></textarea>
      <div className="buttons-container">
        <button className="event-form-button cancel-button">Cancel</button>
        <button className="event-form-button submit-button">Submit</button>
      </div>
    </Form>
  );
};

export default EventForm;
