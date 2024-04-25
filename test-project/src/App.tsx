import "./App.css";
import MainSection from "./components/MainSection/MainSection";
import SubscribeSection from "./components/SubscribeSection/SubscribeSection";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <MainSection />
      <SubscribeSection />
    </div>
  );
}

export default App;
