//React-Router
import { Form, useNavigate, json, redirect } from "react-router-dom";

//Css files and other assets
import "./EventForm.css";

const EventForm = (props) => {
  const { formMethod, defValues } = props;
  const navigate = useNavigate();
  const cancelTheForm = (eventObject) => {
    eventObject.preventDefault();
    navigate("..", { relative: "path" });
  };

  console.log(formMethod);
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
        defaultValue={defValues ? defValues.title : ""}
      ></input>

      <label className="label-style" htmlFor="image-input">
        Image
      </label>
      <input
        type="text"
        id="image-input"
        name="image"
        className="input-style"
        defaultValue={defValues ? defValues.image : ""}
      ></input>

      <label className="label-style" htmlFor="image-input">
        Date
      </label>
      <input
        type="date"
        id="image-input"
        name="date"
        className="input-style"
        defaultValue={defValues ? defValues.date : ""}
      ></input>

      <label className="label-style" htmlFor="description-text">
        Description
      </label>
      <textarea
        id="description-text"
        name="description"
        className="description-text-area"
        defaultValue={defValues ? defValues.description : ""}
      ></textarea>
      <div className="buttons-container">
        <button
          className="event-form-button cancel-button"
          onClick={cancelTheForm}
        >
          Cancel
        </button>
        <button type="submit" className="event-form-button submit-button">
          Submit
        </button>
      </div>
    </Form>
  );
};

export default EventForm;

export const eventFormAction = async ({ request, params }) => {
  const { method } = request;

  const { eventId: Id } = params;

  const formData = await request.formData();

  const patchData = {
    title: formData.get("title"),
    image: formData.get("image"),
    date: formData.get("date"),
    description: formData.get("description")
  };

  let url = "http://localhost:8080/events/";

  if (method == "PATCH") url = url + Id;

  const formRequest = await fetch(url, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(patchData)
  });

  if (formRequest.ok) return redirect("..");
  return json(
    { message: "Event Coudn't get edited!" },
    { status: formRequest.status, statusText: formRequest.statusText }
  );
};
