//React-Router stuff
import { useFetcher } from "react-router-dom";

//Css files and other assets
import "./Newsletterform.css";

export default function NewsLetterForm(props) {
  const { formMethod } = props;
  const fetcher = useFetcher();

  return (
    <fetcher.Form
      action="newsletter"
      method={formMethod}
      className="newsletter-form"
      style={{ overflow: "hidden" }}
    >
      <input
        type="email"
        name="newsletter-email"
        placeholder="Sign up for newsletter"
        className="email-input"
      />
      <button className="sign-up-button">Sign up</button>
    </fetcher.Form>
  );
}
