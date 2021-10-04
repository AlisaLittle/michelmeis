import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Container from "./containers/Container/Container.js";

function App() {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vw = window.innerWidth * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vw", `${vw}px`);

  window.addEventListener("resize", () => {
    document
      .querySelector(":root")
      .style.setProperty("--vh", window.innerHeight / 100 + "px");
  });
  window.addEventListener("resize", () => {
    document
      .querySelector(":root")
      .style.setProperty("--vw", window.innerWidth / 100 + "px");
  });

  return (
    <BrowserRouter>
      <Route path="/">
        <Container />
      </Route>
    </BrowserRouter>
  );
}

export default App;
