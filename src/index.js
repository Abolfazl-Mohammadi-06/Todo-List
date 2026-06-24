import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//in older version (Before v18) of React we should write rendering code like this :
//
//ReactDOM.render(</App>,document.getElementById('root'));
// //
