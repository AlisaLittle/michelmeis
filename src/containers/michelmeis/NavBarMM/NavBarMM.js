import React, { useState, useEffect } from "react";
import Home from "../../../pictures/Home.jpg";
import styles from "./NavBarMM.module.css";
import { Link, Redirect, useLocation } from "react-router-dom";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Parallax } from "react-scroll-parallax";
import HorizontalScroll from "react-scroll-horizontal";
import News from "../../../pictures/Meis/News.jpg";
import About from "../../../pictures/Meis/About.jpg";
import Projects from "../../../pictures/Meis/Projects.jpg";
import Video from "../../../pictures/Meis/Video.jpg";
import Live from "../../../pictures/Meis/Live.jpg";
import Contact from "../../../pictures/Meis/Contact.jpg";
import HomeQuartet from "../../../pictures/Quartet/Home.jpg";
import AboutQuartet from "../../../pictures/Quartet/About.jpg";
import ContactQuartet from "../../../pictures/Quartet/Contact.jpg";
import LiveQuartet from "../../../pictures/Quartet/Live.jpg";
import MusicQuartet from "../../../pictures/Quartet/Music.jpg";
import NewsQuartet from "../../../pictures/Quartet/News.jpg";
import VideoQuartet from "../../../pictures/Quartet/Video.jpg";

function Landingpage() {
  const [picture, setPicture] = useState("Home");
  const [pictureQuartet, setPictureQuartet] = useState("HomeQuartet");
  const [transition, setTransition] = useState(false);
  const [secondTransition, setSecondTransition] = useState(false);
  const [photoSidebar, setPhotoSidebar] = useState(false);
  const [redirect, setRedirect] = useState(null);
  const [header, setHeader] = useState(null);
  const [toQuartet, setToQuartet] = useState(false);
  const [toMichelMeis, setToMichelMeis] = useState(false);
  const [delayHandler, setDelayHandler] = useState(null);
  const [doItOnce, setDoItOnce] = useState(true);
  const path = useLocation().pathname;
  /*   useEffect(() => {
    if (path == "/4tet") {
      setPhotoSidebar(false);
      setToQuartet(true);
    }
  }, []); */

  const routes = [
    { name: "News", picture: News },
    { name: "About", picture: About },
    { name: "Projects", picture: Projects },
    { name: "Video", picture: Video },
    { name: "Live", picture: Live },
    { name: "Contact", picture: Contact },
  ];
  const routesQuartet = [
    { name: "News", picture: News },
    { name: "About", picture: About },
    { name: "Music", picture: Projects },
    { name: "Video", picture: Video },
    { name: "Live", picture: Live },
    { name: "Contact", picture: Contact },
  ];

  const handleClick = (name) => {
    if (!photoSidebar) {
      setTransition(true);
      setSecondTransition(true);
      setTimeout(() => {
        setHeader(name);
      }, 600);
      setTimeout(() => {
        setPhotoSidebar(true);
        setTransition(false);
      }, 1000);
      setTimeout(() => {
        setSecondTransition(false);
        setRedirect(name);
      }, 2000);
    } else {
      setHeader(name);
      setRedirect(name);
    }
  };
  const handleClickQuartet = (name) => {
    if (!photoSidebar) {
      setTransition(true);
      setSecondTransition(true);
      setTimeout(() => {
        setHeader(name);
      }, 600);
      setTimeout(() => {
        setPhotoSidebar(true);
        setTransition(false);
      }, 1000);
      setTimeout(() => {
        setSecondTransition(false);
        setRedirect(name);
      }, 2000);
    } else {
      setHeader(name);
      setRedirect(name);
    }
  };

  const handleHover = (name) => {
    if (!transition || !secondTransition) {
      setDelayHandler(
        setTimeout(() => {
          setPicture(name);
        }, 200)
      );
    } else {
      return null;
    }
  };
  const handleHoverQuartet = (name) => {
    setDelayHandler(
      setTimeout(() => {
        setPictureQuartet(name);
      }, 200)
    );
  };
  const handleMouseLeave = () => {
    clearTimeout(delayHandler);
  };
  const handleHome = () => {
    setHeader(null);
    setPicture("Home");
    setTransition(true);
    setRedirect("/");
    setTimeout(() => {
      setTransition(false);
      setPhotoSidebar(false);
    }, 1000);
  };
  console.log(
    "picture:",
    picture,
    "transition:",
    transition,
    "photoSidebar:",
    photoSidebar
  );
  const goToQuartet = () => {
    setPhotoSidebar(false);
    setToQuartet(true);
    setTimeout(() => setRedirect("/4tet"), 1000);
  };
  const goToMichelMeis = () => {
    setToQuartet(false);
    setToMichelMeis(true);
    setPhotoSidebar(false);
    setPicture("Home");
    setTimeout(() => setRedirect("/"), 1000);
    setTimeout(() => setToMichelMeis(false), 1000);
  };

  if (path !== "/" && doItOnce) {
    const name = path.substring(1);
    console.log("michel", name);
    setPhotoSidebar(true);
    setPicture(name);
    setDoItOnce(false);
    setHeader(name);
  }
  return (
    <div className={styles.screen}>
      <div
        className={`${styles.alisa} ${
          toQuartet || path === "/4tet" ? styles.rowToRight : null
        } ${toMichelMeis ? styles.rowToLeft : null}`}
      >
        <div className={styles.container}>
          {redirect ? <Redirect to={`${redirect}`} /> : null}
          {header ? (
            <div
              className={`${styles.header} ${styles.main} ${
                photoSidebar ? styles.headerSidebar : null
              }`}
            >
              {header.toUpperCase()}
            </div>
          ) : null}
          <div className="row">
            <div className={styles.boxTop}>
              <div
                className={`${styles.first} ${styles.main} ${styles.mainWidth} `}
                onClick={handleHome}
                onMouseOver={() => handleHover("Home")}
                onMouseLeave={() => handleMouseLeave()}
              >
                MICHEL MEIS
              </div>
            </div>
            {path === "/" ? (
              <div className={styles.boxBottom}>
                <div
                  className={`${styles.second} ${styles.main}`}
                  onClick={() => {
                    goToQuartet();
                  }}
                >
                  4TET
                </div>
              </div>
            ) : null}
            <img
              className={`${styles.image}  ${
                transition ? styles.transition : ""
              } ${photoSidebar ? styles.photoSidebar : null} ${
                photoSidebar || path === "/" ? styles.home : null
              } ${
                picture === "Home" || (path === "/Home" && picture === "Home")
                  ? styles.active
                  : ""
              }`}
              src={Home}
            />
            <img
              className={`${styles.image}  ${
                transition ? styles.transition : ""
              } ${photoSidebar ? styles.photoSidebar : null} ${
                photoSidebar || path === "/News" ? styles.news : null
              } ${
                picture === "News" || (path === "/News" && picture === "News")
                  ? styles.active
                  : ""
              }`}
              src={News}
            />
            <img
              className={`${styles.image}  ${
                transition ? styles.transition : ""
              } ${photoSidebar ? styles.photoSidebar : null} ${
                photoSidebar || path === "/About" ? styles.about : null
              } ${
                picture === "About" ||
                (path === "/About" && picture === "About")
                  ? styles.active
                  : ""
              }`}
              src={About}
            />
            <img
              className={`${styles.image}  ${
                transition ? styles.transition : ""
              } ${photoSidebar ? styles.photoSidebar : null} ${
                photoSidebar || path === "/Projects" ? styles.projects : null
              } ${
                picture === "Projects" ||
                (path === "/Projects" && picture === "Projects")
                  ? styles.active
                  : ""
              }`}
              src={Projects}
            />
            <img
              className={`${styles.image}  ${
                transition ? styles.transition : ""
              } ${photoSidebar || path !== "/" ? styles.photoSidebar : null} ${
                photoSidebar || path === "/Video" ? styles.video : null
              } ${
                picture === "Video" ||
                (path === "/Video" && picture === "Video")
                  ? styles.active
                  : ""
              }`}
              src={Video}
            />
            <img
              className={`${styles.image}  ${
                transition ? styles.transition : ""
              } ${photoSidebar || path !== "/" ? styles.photoSidebar : null} ${
                photoSidebar || path === "/Live" ? styles.live : null
              } ${
                picture === "Live" || (path === "/Live" && picture === "Live")
                  ? styles.active
                  : ""
              }`}
              src={Live}
            />{" "}
            <img
              className={`${styles.image}  ${
                transition ? styles.transition : ""
              } ${photoSidebar || path !== "/" ? styles.photoSidebar : null} ${
                photoSidebar || path === "/Contact" ? styles.contact : null
              } ${
                picture === "Contact" ||
                (path === "/Contact" && picture === "Contact")
                  ? styles.active
                  : ""
              }`}
              src={Contact}
            />
            <nav className={styles.nav}>
              {routes.map((route) => {
                return (
                  <div
                    className={`${styles.navPoint} ${
                      path === "/" + route.name ? styles.navPointActive : null
                    }`}
                    onMouseOver={() => handleHover(route.name)}
                    onMouseLeave={() => handleMouseLeave()}
                    onClick={() => handleClick(route.name)}
                  >
                    {route.name.toUpperCase()}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
        <div className={styles.quartet}>
          <div className={styles.boxTop} onClick={goToMichelMeis}>
            <div
              className={`${styles.secondDark} ${styles.main}  ${styles.mainWidth}`}
            >
              MICHEL MEIS
            </div>
          </div>
          <div className={styles.boxBottom}>
            <div className={`${styles.firstDark} ${styles.main}`}>4TET</div>
          </div>
          {/*     <img
            src={HomeQuartet}
            className={`${styles.imageQuartet} ${styles.cat}`}
          /> */}
          <nav className={styles.navQuartet}>
            {routesQuartet.map((route) => {
              return (
                <div
                  className={`${styles.navPointQuartet} ${
                    path === "/4tet/" + route.name
                      ? styles.navPointActive
                      : null
                  }`}
                  onMouseOver={() => handleHoverQuartet(route.name + "Quartet")}
                  onClick={() => handleClickQuartet("/4tet/" + route.name)}
                >
                  {route.name.toUpperCase()}
                </div>
              );
            })}
          </nav>
          <img
            className={`${styles.imageQuartet}  ${
              transition ? styles.transition : ""
            } ${photoSidebar ? styles.photoSidebar : null} ${
              photoSidebar || path === "/" ? styles.homeQuartet : null
            } ${pictureQuartet === "HomeQuartet" ? styles.active : ""}`}
            src={HomeQuartet}
          />
          <img
            className={`${styles.imageQuartet}  ${
              transition ? styles.transition : ""
            } ${photoSidebar ? styles.photoSidebar : null} ${
              photoSidebar || path === "/4tet/News" ? styles.newsQuartet : null
            } ${
              pictureQuartet === "NewsQuartet" || path === "/4tet/News"
                ? styles.active
                : ""
            }`}
            src={NewsQuartet}
          />
          <img
            className={`${styles.imageQuartet}  ${
              transition ? styles.transition : ""
            } ${photoSidebar ? styles.photoSidebar : null} ${
              photoSidebar || path === "/4tet/About"
                ? styles.aboutQuartet
                : null
            } ${
              pictureQuartet === "AboutQuartet" || path === "/4tet/About"
                ? styles.active
                : ""
            }`}
            src={AboutQuartet}
          />
          <img
            className={`${styles.imageQuartet}  ${
              transition ? styles.transition : ""
            } ${photoSidebar ? styles.photoSidebar : null} ${
              photoSidebar || path === "/4tet/Contact"
                ? styles.contactQuartet
                : null
            } ${
              pictureQuartet === "ContactQuartet" || path === "/4tet/Contact"
                ? styles.active
                : ""
            }`}
            src={ContactQuartet}
          />
          <img
            className={`${styles.imageQuartet}  ${
              transition ? styles.transition : ""
            } ${photoSidebar ? styles.photoSidebar : null} ${
              photoSidebar || path === "/4tet/Live" ? styles.liveQuartet : null
            } ${
              pictureQuartet === "LiveQuartet" || path === "/4tet/Live"
                ? styles.active
                : ""
            }`}
            src={LiveQuartet}
          />
          <img
            className={`${styles.imageQuartet}  ${
              transition ? styles.transition : ""
            } ${photoSidebar ? styles.photoSidebar : null} ${
              photoSidebar || path === "/4tet/Music"
                ? styles.musicQuartet
                : null
            } ${
              pictureQuartet === "MusicQuartet" || path === "/4tet/Music"
                ? styles.active
                : ""
            }`}
            src={MusicQuartet}
          />{" "}
          <img
            className={`${styles.imageQuartet}  ${
              transition ? styles.transition : ""
            } ${photoSidebar ? styles.photoSidebar : null} ${
              photoSidebar || path === "/4tet/Video"
                ? styles.videoQuartet
                : null
            } ${
              pictureQuartet === "VideoQuartet" || path === "/4tet/Video"
                ? styles.active
                : ""
            }`}
            src={VideoQuartet}
          />
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
