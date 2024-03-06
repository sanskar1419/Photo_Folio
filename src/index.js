// Importing required method,function,hooks etc.
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";

// Creating instance of react Dom
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the content
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
