import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
import Badge from "./components/Badge";

const container = document.getElementById("app");

ReactDOM.render(
  <Badge
    firstName="Israel"
    lastName="Castro"
    avatarUrl="https://es.gravatar.com/userimage/15984944/d3537319e5b8b364becbc34517450e40.jpg?size=200"
    jobTitle="Frontend Enginer"
    twitter="iscasur"
  />,
  container
);
