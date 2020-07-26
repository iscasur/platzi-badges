import React from "react";
import ReactDOM from "react-dom";

// const jsx = <h1>Hello, Platzi Badges!</h1>;
// const element = React.createElement(
//   "a",
//   { href: "https://platzi.com" },
//   "Ir a Platzi"
// );
const name = "Israel";
const lastname = "Castro";
const age = () => 30 + 3;
const school = "Platzi";
const month = "Octubre";
// const element = React.createElement(
//   "h1",
//   {},
//   `Hola, soy ${name} y tengo ${sum()} pesos`
// );
const jsx = (
  <div>
    <h1>
      Hola, soy {name} {lastname} y tengo {age()} años
    </h1>
    <p>
      Soy estudiande de {school} desde el pasado mes de {month}
    </p>
  </div>
);

const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, `Hola, soy ${name} y tengo ${age()} años`),
  React.createElement(
    "p",
    {},
    `Soy estudiante de ${school} desde el pasado mes de ${month}`
  )
);

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container);
