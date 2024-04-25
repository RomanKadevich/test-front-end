import { Button } from "../../components/Button/Button";
import { DateCountdown } from "../../components/DateCountdown/DateCountdown";
import "./MainSection.scss";
import logo from "../../assets/logo.svg";

const MainSection = () => {
  return (
    <section className="main-section">
      <div className="container main-section__container">
        <div className="main-section__left-bg animate__animated animate__fadeInTopLeft animate__slow"></div>
        <div className="main-section__right-bg animate__animated animate__fadeInTopRight animate__slow"></div>
        <div className="main-section__box">
          <a href="/" className="animate__animated animate__fadeInDown ">
            <img src={logo} alt="logo" className="main-section__logo" />
          </a>
          <div className="main-section__cental-box animate__animated animate__fadeInDown animate__delay-1s">
            <h1 className="main-section__title">Under Construction</h1>
            <p className="main-section__subtitle">
              We're making lots of improvements and will be back soon
            </p>
            <DateCountdown />
          </div>
          <div className="main-section__bottom-box animate__animated animate__fadeInDown animate__delay-3s">
            <p className="main-section__text">
              Check our event page when you wait:
            </p>

            <Button
              text="Go to the event"
              isArrowIcon={true}
              isButtonLink={true}
              link="/#"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
