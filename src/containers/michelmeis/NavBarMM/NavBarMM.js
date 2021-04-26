import React, { useState } from "react";
import Home from "../../../pictures/Home.jpg";
import styles from "./NavBarMM.module.css";
import { Link, Redirect } from "react-router-dom";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Parallax } from "react-scroll-parallax";
import HorizontalScroll from "react-scroll-horizontal";
import News from "../../../pictures/Meis/News.jpg";
import About from "../../../pictures/Meis/About.jpg";
import Projects from "../../../pictures/Meis/Projects.jpg";
import Video from "../../../pictures/Meis/Video.jpg";
import Live from "../../../pictures/Meis/Live.jpg";
import Contact from "../../../pictures/Meis/Contact.jpg";

function Landingpage() {
  const [picture, setPicture] = useState("Home");
  const [navBar, setNavBar] = useState(true);
  const [transition, setTransition] = useState("");
  const [redirect, setRedirect] = useState(null);
  const [header, setHeader] = useState(null);
  const [photoSidebar, setPhotoSiedebar] = useState(null);

  const handleClick = (route) => {
    console.log(route);
    setTransition(route);
    setNavBar(false);
    setTimeout(() => setRedirect(route), 2000);
    setTimeout(() => setHeader(route), 600);
    setTimeout(() => setPhotoSiedebar(route), 1000);
  };
  const handleHome = () => {
    setNavBar(true);
    setPicture("Home");
    setTransition("Home");
    setRedirect("/");
    setHeader(null);
    setPhotoSiedebar(null);
  };
  return (
    <div className={styles.container}>
      {redirect ? <Redirect to={`${redirect}`} /> : null}
      {header ? (
        <div
          className={`${styles.header} ${styles.main} ${
            photoSidebar ? styles.headerSidebar : null
          }`}
        >
          {header}
        </div>
      ) : null}
      <div className="row">
        <div className={styles.side} />
        <div
          className={styles.first}
          onClick={handleHome}
          /* onMouseOver={() => setPicture("Home")} */
        >
          <div className={styles.main}>MICHEL</div>
          <div className={styles.main}>MEIS</div>
        </div>
        {!photoSidebar ? (
          <div className={`${styles.second} ${styles.main}`}>4TET</div>
        ) : null}
        <img
          className={`${styles.image} ${
            picture === "Home" ? styles.active : ""
          }`}
          src={Home}
        />
        {/*  Stacked images
         */}{" "}
        <img
          className={`${styles.image} ${
            picture === "News" ? styles.active : ""
          } ${transition === "News" ? styles.transition : ""} ${
            photoSidebar ? styles.photoSidebar : null
          }`}
          src={News}
        />
        <img
          className={`${styles.image} ${
            picture === "About" ? styles.active : ""
          }`}
          src={About}
        />{" "}
        <img
          className={`${styles.image} ${
            picture === "Projects" ? styles.active : ""
          }`}
          src={Projects}
        />{" "}
        <img
          className={`${styles.image} ${
            picture === "Video" ? styles.active : ""
          }`}
          src={Video}
        />
        <img
          className={`${styles.image} ${
            picture === "Live" ? styles.active : ""
          }`}
          src={Live}
        />{" "}
        <img
          className={`${styles.image} ${
            picture === "Contact" ? styles.active : ""
          }`}
          src={Contact}
        />
        {navBar ? (
          <HorizontalScroll className={styles.nav}>
            <nav>
              <div className={styles.row}>
                {/* <Link to="/news" className={styles.link}> */}
                <div
                  className={styles.navPoint}
                  onMouseOver={() => setPicture("News")}
                  onClick={() => handleClick("News")}
                >
                  NEWS
                </div>
                {/*  </Link> */}
                <Link to="/about" className={styles.link}>
                  <div
                    className={styles.navPoint}
                    onMouseOver={() => setPicture("About")}
                  >
                    ABOUT
                  </div>
                </Link>
                <Link to="/projects" className={styles.link}>
                  <div
                    className={styles.navPoint}
                    onMouseOver={() => setPicture("Projects")}
                  >
                    PROJECTS
                  </div>
                </Link>
                <Link to="/video" className={styles.link}>
                  <div
                    className={styles.navPoint}
                    onMouseOver={() => setPicture("Video")}
                  >
                    VIDEO
                  </div>
                </Link>
                <Link to="/live" className={styles.link}>
                  <div
                    className={styles.navPoint}
                    onMouseOver={() => setPicture("Live")}
                  >
                    LIVE
                  </div>
                </Link>
                <Link to="/contact" className={styles.link}>
                  <div
                    className={styles.navPoint}
                    onMouseOver={() => setPicture("Contact")}
                  >
                    CONTACT
                  </div>
                </Link>
              </div>
            </nav>
          </HorizontalScroll>
        ) : null}
      </div>
    </div>
  );
}

export default Landingpage;
