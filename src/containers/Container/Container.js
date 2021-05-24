import { Route, Switch } from "react-router-dom";
import React from "react";
import News from "../michelmeis/News/News.js";
import About from "../michelmeis/About/About.js";
import Contact from "../michelmeis/Contact/Contact";
import NavBarMM from "../michelmeis/NavBarMM/NavBarMM.js";

function Container() {
  return (
    <div className="App">
      <NavBarMM />
      <Switch>
        {/*  <Route path="/" exact component={Home} /> */}
        <Route path="/news" exact component={News} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </div>
  );
}

export default Container;
