import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "animate.css";
import "../node_modules/modern-normalize/modern-normalize.css";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
