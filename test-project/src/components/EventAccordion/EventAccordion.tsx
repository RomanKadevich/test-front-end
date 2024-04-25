import { useState } from "react";
import "./EventAccordion.scss";

function EventsAccordion() {
  const [activeIndex, setActiveIndex] = useState<null | number>(0);

  const handleItemClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const eventTitles = [
    "Hawaiian Party",
    "Mar Party",
    "Party on the Beach",
    "Home Society",
    "System Design & Implementation",
    "Network Security",
    "System Design Best Practices",
    "Client Care Plans",
  ];

  return (
    <div className="accordion">
      <section className="accordion__section">
        {eventTitles.map((title, index) => (
          <div key={index} className="accordion__container">
            <div
              className="accordion__item"
              onClick={() => handleItemClick(index)}
            >
              <div className="accordion__item-overlay"></div>
              <span className="accordion__title">{title}</span>
              <span className="accordion__number">0{index + 1}</span>
            </div>
            <div
              className={`accordion__info ${
                activeIndex === index ? "accordion__active" : ""
              }`}
            >
              <div
                className={` accordion__box ${
                  activeIndex === index ? "accordion__active-box" : ""
                }`}
              >
                <p className="accordion__content-title">{title}</p>
                <p className="accordion__date">13.02.2023</p>
                <a href="/#" className="accordion__button">
                  More information
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default EventsAccordion;
