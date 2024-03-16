import React from "react";
import ReactDOM from "react-dom/client";
import "./root_styles.css";
import "./desktop_styles.scss";
import "./mobile_styles.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
