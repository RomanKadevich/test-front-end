import "./App.scss";
import { EventSection } from "./Sections/EventSection/EventSection";
import MainSection from "./Sections/MainSection/MainSection";
import SubscribeSection from "./Sections/SubscribeSection/SubscribeSection";

function App() {
  return (
    <>
      <div className="app__wrapper">
        <MainSection />
        <SubscribeSection />
      </div>
      <div className="app__wrapper">
        <EventSection />
      </div>
    </>
  );
}

export default App;
