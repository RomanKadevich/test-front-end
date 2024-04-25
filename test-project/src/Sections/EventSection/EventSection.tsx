import EventsAccordion from "../../components/EventAccordion/EventAccordion";
import "./EventSection.scss";

export const EventSection = () => {
  return (
    <section className="event-section" id="event-section">
      <h2 className="event-section__title">All events</h2>
      <EventsAccordion />
    </section>
  );
};
