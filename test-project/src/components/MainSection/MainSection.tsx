import { Button } from "../Button/Button";
import { DateCountdown } from "../DateCountdown/DateCountdown";

import "./MainSection.scss";
const MainSection = () => {
  return (
    <section className="main-section">
      <div className="container">
        <div className="main-section__right-bg"></div>
        <div className="main-section__left-bg"></div>
        <img
          src="./src/assets/logo.svg"
          alt="logo"
          className="main-section__logo"
        />
        <h1 className="main-section__title">Under Construction</h1>
        <p className="main-section__subtitle">
          We're making lots of improvements and will be back soon
        </p>
        <DateCountdown />
      </div>
      <p className="main-section__text">Check our event page when you wait:</p>

      <Button text="Go to the event" isArrowIcon={true}/>
    </section>
  );
};

export default MainSection;
