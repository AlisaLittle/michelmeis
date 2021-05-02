import { Route, Switch, Link } from "react-router-dom";
import React from "react";
import Home from "../michelmeis/NavBarMM/NavBarMM.js";
import News from "../michelmeis/News/News.js";
import NavBarMM from "../michelmeis/NavBarMM/NavBarMM.js";

function Container() {
  return (
    <div className="App">
      <NavBarMM />
      <Switch>
        {/*  <Route path="/" exact component={Home} /> */}
        <Route path="/news" exact component={News} />
      </Switch>
    </div>
  );
}

export default Container;
