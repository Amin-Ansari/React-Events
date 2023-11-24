//Components
import ResponsiveContainer from "../../UI/ResponsiveContainer";
import NavigationBar from "./NavigationBar";

//The css files and other assets
import "./Header.css";
import NewsLetterForm from "../Forms/NewsletterForm";

const Header = () => {
  return (
    <ResponsiveContainer>
      <header className="header-style">
        <NavigationBar />
        <div className="newsletter-form-container">
          <NewsLetterForm method={"method"} />
        </div>
      </header>
    </ResponsiveContainer>
  );
};

export default Header;
