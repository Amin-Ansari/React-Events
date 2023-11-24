//React-Router stuff
import { useFetcher, json } from "react-router-dom";

//Css files and other assets
import "./Newsletterform.css";

const NewsLetterForm = (props) => {
  const { method } = props;
  const fetcher = useFetcher();

  console.log(fetcher.data);

  return (
    <fetcher.Form
      action="/newsletter"
      method={method}
      className="newsletter-form"
      style={{ overflow: "hidden" }}
    >
      <input
        type="email"
        name="newsletter-email"
        placeholder="Sign up for newsletter"
        className="email-input"
      />
      <button type="submit" className="sign-up-button">
        Sign up
      </button>
    </fetcher.Form>
  );
};

export default NewsLetterForm;
