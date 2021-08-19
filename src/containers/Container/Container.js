import { Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import News from "../michelmeis/News/News.js";
import About from "../michelmeis/About/About.js";
import Contact from "../michelmeis/Contact/Contact";
import Projects from "../michelmeis/Projects/Projects";
import Live from "../michelmeis/Live/Live";
/* import Video from "../michelmeis/Video/Video";
 */ import NavBarMM from "../michelmeis/NavBarMM/NavBarMM.js";

function Container() {
  const [picture, setPicture] = useState("Home");
  console.log(picture);
  return (
    <div className="App">
      <NavBarMM picture={picture} setPicture={setPicture} />
      <Switch>
        {/*  <Route path="/" exact component={Home} /> */}
        <Route path="/news" exact component={News} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route
          path="/projects"
          exact
          component={() => (
            <Projects picture={picture} setPicture={setPicture} />
          )}
        />
        <Route path="/live" exact component={Live} />
        {/*         <Route path="/video" exact component={Video} />
         */}{" "}
      </Switch>
    </div>
  );
}

export default Container;
