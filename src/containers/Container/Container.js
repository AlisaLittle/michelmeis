import { Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import News from "../michelmeis/News/News";
import About from "../michelmeis/About/About";
import Contact from "../michelmeis/Contact/Contact";
import Projects from "../michelmeis/Projects/Projects";
import Live from "../michelmeis/Live/Live";
import NavBarMM from "../michelmeis/NavBarMM/NavBarMM";
import News4tet from "../quartet/News/News";
import About4tet from "../quartet/About/About";
import Music4tet from "../quartet/Music/Music";
import Live4tet from "../quartet/Live/Live";
import Video4tet from "../quartet/Video/Video";
import Contact4tet from "../quartet/Contact/Contact";

function Container() {
  const [picture, setPicture] = useState("Home");
  console.log(picture);
  return (
    <div className="App">
      <NavBarMM picture={picture} setPicture={setPicture} />
      <Switch>
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
        <Route path="/4tet/news" exact component={News4tet} />
        <Route path="/4tet/about" exact component={About4tet} />
        <Route path="/4tet/video" exact component={Video4tet} />
        <Route path="/4tet/music" exact component={Music4tet} />
        <Route path="/4tet/live" exact component={Live4tet} />
        <Route path="/4tet/contact" exact component={Contact4tet} />
      </Switch>
    </div>
  );
}

export default Container;
