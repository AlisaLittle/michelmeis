import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Container from "./containers/Container/Container.js";

function App() {
  return (
    <BrowserRouter>
      <Route path="/">
        <Container />
      </Route>
    </BrowserRouter>
  );
}

export default App;
