//Components and other pages
import ResponsiveContainer from "../components/UI/ResponsiveContainer";

//Css files and other assets
import "./HomePage.css";

const HomePage = () => {
  return (
    <ResponsiveContainer>
      <h1 className="home-page-welcome-title">Welcome to React events</h1>
      <p className="home-page-p">
        Navigate to the <span>Events</span> page to see all the events
        available!
      </p>
    </ResponsiveContainer>
  );
};

export default HomePage;
