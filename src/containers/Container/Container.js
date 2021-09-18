import { Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import News from "../michelmeis/News/News";
import About from "../michelmeis/About/About";
import Contact from "../michelmeis/Contact/Contact";
import Projects from "../michelmeis/Projects/Projects";
import Live from "../michelmeis/Live/Live";
import NavBarMM from "../NavBarMM/NavBarMM";
import News4tet from "../quartet/News/News";
import About4tet from "../quartet/About/About";
import Music4tet from "../quartet/Music/Music";
import Live4tet from "../quartet/Live/Live";
import Video4tet from "../quartet/Video/Video";
import Contact4tet from "../quartet/Contact/Contact";

function Container() {
  const [showContent, setShowContent] = useState(true);
  const [toQuartet, setToQuartet] = useState(false);
  console.log("showContent", showContent);
  console.log("toQuartet", toQuartet);
  return (
    <div className="App">
      <NavBarMM
        showContent={showContent}
        setShowContent={setShowContent}
        toQuartet={toQuartet}
        setToQuartet={setToQuartet}
      />
      <Switch>
        <Route
          path="/news"
          exact
          component={() => (
            <News showContent={showContent} setShowContent={setShowContent} />
          )}
        />
        <Route
          path="/about"
          exact
          component={() => (
            <About showContent={showContent} setShowContent={setShowContent} />
          )}
        />
        <Route
          path="/contact"
          exact
          component={() => (
            <Contact
              showContent={showContent}
              setShowContent={setShowContent}
            />
          )}
        />
        <Route
          path="/projects"
          exact
          component={() => (
            <Projects
              showContent={showContent}
              setShowContent={setShowContent}
              setToQuartet={setToQuartet}
            />
          )}
        />
        <Route
          path="/live"
          exact
          component={() => (
            <Live showContent={showContent} setShowContent={setShowContent} />
          )}
        />
        <Route
          path="/4tet/news"
          exact
          component={() => (
            <News4tet
              showContent={showContent}
              setShowContent={setShowContent}
            />
          )}
        />
        <Route
          path="/4tet/about"
          exact
          component={() => (
            <About4tet
              showContent={showContent}
              setShowContent={setShowContent}
            />
          )}
        />
        <Route
          path="/4tet/video"
          exact
          component={() => (
            <Video4tet
              showContent={showContent}
              setShowContent={setShowContent}
            />
          )}
        />
        <Route
          path="/4tet/music"
          exact
          component={() => (
            <Music4tet
              showContent={showContent}
              setShowContent={setShowContent}
            />
          )}
        />
        <Route
          path="/4tet/live"
          exact
          component={() => (
            <Live4tet
              showContent={showContent}
              setShowContent={setShowContent}
            />
          )}
        />
        <Route
          path="/4tet/contact"
          exact
          component={() => (
            <Contact4tet
              showContent={showContent}
              setShowContent={setShowContent}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default Container;
