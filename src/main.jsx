import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Funofme from "./Funofme.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Funofme />
  </StrictMode>
);
