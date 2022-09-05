import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Avatar from "./Avatar";
import AvatarRadix from "./AvatarRadix";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Avatar src="https://placekitten.com/400/400" alt="kitten" />
    <br />
    <AvatarRadix src="https://placekitten.com/400/400" alt="kitten" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
