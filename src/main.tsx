import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import "./utils/ton-event-tracker";
import { App } from "./components/App/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
