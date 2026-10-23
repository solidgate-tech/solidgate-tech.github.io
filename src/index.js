import React from "react";
import ReactDOM from "react-dom/client";
// Global styles first, so component styles (CSS modules) can override them
import "./index.css";
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
