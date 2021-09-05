import React, { useState, useEffect } from "react";
import Home from "../../../pictures/Home.jpg";
import styles from "./NavBarMM.module.css";
import { Link, Redirect, useLocation } from "react-router-dom";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Parallax } from "react-scroll-parallax";
import HorizontalScroll from "react-scroll-horizontal";
import SocialMedia from "../../../components/SocialMedia/SocialMedia";
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

function NavBar(props) {
  /*   const [picture, setPicture] = useState("Home");
   */ const [pictureQuartet, setPictureQuartet] = useState("HomeQuartet");
  const [transition, setTransition] = useState(false);
  const [secondTransition, setSecondTransition] = useState(false);
  const [photoSidebar, setPhotoSidebar] = useState(false);
  const [photoSidebarQuartet, setPhotoSidebarQuartet] = useState(false);
  const [redirect, setRedirect] = useState(null);
  const [header, setHeader] = useState(null);
  const [headerQuartet, setHeaderQuartet] = useState(null);

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
    /*     { name: "Video", picture: Video },
     */ { name: "Live", picture: Live },
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
    if (name === "Projects") {
      handleHome(name);
    } else {
      console.log("alisa", name);
      setTransition(true);
      if (!photoSidebar) {
        console.log("alisa if");
        setSecondTransition(true);
        setRedirect(name);
        setTimeout(() => {
          setHeader(name);
        }, 600);
        setTimeout(() => {
          setPhotoSidebar(true);
          setTransition(false);
        }, 100);
        setTimeout(() => {
          setSecondTransition(false);
        }, 2000);
      } else {
        setHeader(name);
        setRedirect(name);

        setTimeout(() => {
          setTransition(false);
        }, 900);
        setTimeout(() => {
          setSecondTransition(false);
        }, 2000);
      }
    }
  };
  const handleClickQuartet = (name) => {
    /*    goToQuartet(); */
    setTransition(true);
    if (!photoSidebarQuartet) {
      setSecondTransition(true);
      setTimeout(() => {}, 600);
      setTimeout(() => {
        setPhotoSidebarQuartet(true);
        setTransition(false);
      }, 1000);
      setTimeout(() => {
        setSecondTransition(false);
        setRedirect(name);
      }, 2000);
    } else {
      setTimeout(() => {
        setTransition(false);
        setRedirect(name);
      }, 900);
      setTimeout(() => {
        setSecondTransition(false);
      }, 2000);
    }
  };

  const handleHover = (name) => {
    if (!transition && !secondTransition) {
      setDelayHandler(
        setTimeout(() => {
          props.setPicture(name);
        }, 500)
      );
    } else {
      return null;
    }
  };
  const handleHoverQuartet = (name) => {
    if (!transition && !secondTransition) {
      setDelayHandler(
        setTimeout(() => {
          setPictureQuartet(name);
        }, 500)
      );
    } else {
      return null;
    }
  };
  const handleMouseLeave = () => {
    clearTimeout(delayHandler);
  };

  const handleHome = (title) => {
    setHeader(null);
    props.setPicture(title);
    setTransition(true);
    if (title === "Home") {
      setRedirect("/");
    } else {
      setRedirect(title);
    }
    setTimeout(() => {
      setTransition(false);
      setPhotoSidebar(false);
    }, 1000);
  };
  const handleHomeQuartet = (title) => {
    setHeaderQuartet(null);
    setPictureQuartet(title);
    setTransition(true);
    setRedirect("/4tet");
    setTimeout(() => {
      setTransition(false);
      setPhotoSidebarQuartet(false);
    }, 1000);
  };

  const quartetRoute = path.substring(0, 5);

  const goToQuartet = () => {
    setToQuartet(true);
    setToMichelMeis(false);
    setPhotoSidebarQuartet(false);
    setPictureQuartet("HomeQuartet");
    if (quartetRoute !== "/4tet") {
      setTimeout(() => setRedirect("/4tet"), 1000);
    }
  };
  const goToMichelMeis = () => {
    setToQuartet(false);
    setToMichelMeis(true);
    setPhotoSidebar(false);
    props.setPicture("Home");
    setTimeout(() => setRedirect("/"), 1000);
    setTimeout(() => setToMichelMeis(false), 1000);
  };

  if (
    path !== "/" &&
    path !== "/Projects" &&
    quartetRoute !== "/4tet" &&
    doItOnce
  ) {
    const name = path.substring(1);
    setPhotoSidebar(true);
    props.setPicture(name);
    setDoItOnce(false);
    setHeader(name);
  }
  if (quartetRoute === "/4tet" && path !== "/4tet" && doItOnce) {
    const name = path.substring(6);
    setPhotoSidebarQuartet(true);
    setDoItOnce(false);
    goToQuartet();
    setPictureQuartet(name);
  }

  return (
    <div className={styles.screen}>
      <div
        className={`${styles.doubleWidth} ${
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
              {/*    {header.toUpperCase()} */}
            </div>
          ) : null}
          <div className="row">
            <div className={styles.boxTop}>
              <div
                className={`${styles.first} ${styles.main} ${styles.mainWidth} `}
                onClick={() => handleHome("Home")}
                onMouseOver={() => handleHover("Home")}
                onMouseLeave={() => handleMouseLeave()}
              >
                MM
              </div>
              <SocialMedia />
            </div>
            <div
              className={`${styles.boxBottom} ${
                path !== "/4tet" ? styles.animationBoxBottom : null
              }`}
            >
              <div
                className={`${styles.second} ${styles.main}`}
                onClick={() => {
                  goToQuartet();
                }}
              >
                4TET
                <div className={styles.icon}>▷</div>
              </div>
            </div>
            <div
              className={`${styles.imageContainer}  ${
                transition ? styles.transition : ""
              } ${photoSidebar ? styles.photoSidebar : null} ${
                photoSidebar || path === "/" || path === "/Projects"
                  ? styles.home
                  : null
              } ${styles.active}`}
            />
            <img
              className={`${styles.image}  ${
                transition ? styles.transition : ""
              } ${photoSidebar ? styles.photoSidebar : null} ${
                photoSidebar || path === "/" ? styles.home : null
              } ${
                props.picture === "Home" ||
                (path === "/Home" && props.picture === "Home")
                  ? styles.active
                  : ""
              }`}
              src={Home}
              alt="Home"
            />
            <img
              className={`${styles.image}  ${
                transition ? styles.transition : ""
              } ${photoSidebar ? styles.photoSidebar : null} ${
                photoSidebar || path === "/News" ? styles.news : null
              } ${
                props.picture === "News" ||
                (path === "/News" && props.picture === "News")
                  ? styles.active
                  : ""
              }`}
              src={News}
              alt="News"
            />
            <img
              className={`${styles.image}  ${
                transition ? styles.transition : ""
              } ${photoSidebar ? styles.photoSidebar : null} ${
                photoSidebar || path === "/About" ? styles.about : null
              } ${
                props.picture === "About" ||
                (path === "/About" && props.picture === "About")
                  ? styles.active
                  : ""
              }`}
              src={About}
              alt="About"
            />
            <img
              className={`${styles.image}  ${
                transition ? styles.transition : ""
              } ${photoSidebar ? styles.photoSidebar : null} ${
                photoSidebar || path === "/Projects" ? styles.projects : null
              } ${
                props.picture === "Projects" ||
                (path === "/Projects" && props.picture === "Projects")
                  ? styles.active
                  : ""
              }`}
              src={Projects}
              alt="Projects"
            />
            <img
              className={`${styles.image}  ${
                transition ? styles.transition : ""
              } ${photoSidebar ? styles.photoSidebar : null} ${
                photoSidebar || path === "/Live" ? styles.live : null
              } ${
                props.picture === "Live" ||
                (path === "/Live" && props.picture === "Live")
                  ? styles.active
                  : ""
              }`}
              src={Live}
              alt="Live"
            />{" "}
            <img
              className={`${styles.image}  ${
                transition ? styles.transition : ""
              } ${photoSidebar ? styles.photoSidebar : null} ${
                photoSidebar || path === "/Contact" ? styles.contact : null
              } ${
                props.picture === "Contact" ||
                (path === "/Contact" && props.picture === "Contact")
                  ? styles.active
                  : ""
              }`}
              src={Contact}
              alt="Contact"
            />
            <nav className={styles.nav}>
              {routes.map((route, i) => {
                return (
                  <div
                    key={"routes" + i}
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
        {/*             <---------------------------------------- QUARTET --------------------------------->
         */}
        <div className={styles.quartet}>
          <div
            className={`${styles.boxTop} ${
              path.startsWith("/4tet") ? styles.animationBoxTop : null
            }`}
            onClick={goToMichelMeis}
          >
            {path.startsWith("/4tet") && (
              <div className={`${styles.secondDark} ${styles.main}`}>
                <div className={`${styles.icon} ${styles.iconLeft}`}>▷</div>
                MM
              </div>
            )}
          </div>
          <div className={styles.boxBottom}>
            <div
              className={`${styles.firstDark} ${styles.main}`}
              onClick={() => handleHomeQuartet("HomeQuartet")}
              onMouseOver={() => handleHoverQuartet("HomeQuartet")}
              onMouseLeave={() => handleMouseLeave()}
            >
              4TET
            </div>
          </div>
          <nav className={styles.navQuartet}>
            {routesQuartet.map((route, i) => {
              return (
                <div
                  key={"routesQuartet" + i}
                  className={`${styles.navPointQuartet} ${
                    path === "/4tet/" + route.name
                      ? styles.navPointActive
                      : null
                  }`}
                  onMouseOver={() => handleHoverQuartet(route.name + "Quartet")}
                  onMouseLeave={() => handleMouseLeave()}
                  onClick={() => handleClickQuartet("/4tet/" + route.name)}
                >
                  {route.name.toUpperCase()}
                </div>
              );
            })}
          </nav>
          {/*        className={`${styles.image}  ${
                transition ? styles.transition : ""
              } ${photoSidebar ? styles.photoSidebar : null} ${
                photoSidebar || path === "/About" ? styles.about : null
              } ${
                picture === "About" ||
                (path === "/About" && picture === "About")
                  ? styles.active
                  : ""
              }`} */}
          <img
            className={`${styles.imageQuartet}  ${
              transition ? styles.transition : ""
            } ${photoSidebarQuartet ? styles.photoSidebarQuartet : null} ${
              photoSidebarQuartet || path === "/4tet"
                ? styles.homeQuartet
                : null
            } ${
              pictureQuartet === "HomeQuartet" ||
              (path === "/4tet" && pictureQuartet === "Home")
                ? styles.active
                : ""
            }`}
            src={HomeQuartet}
            alt="HomeQuartet"
          />
          <img
            className={`${styles.imageQuartet}  ${
              transition ? styles.transition : ""
            } ${photoSidebarQuartet ? styles.photoSidebarQuartet : null}  ${
              pictureQuartet === "NewsQuartet" ||
              (path === "/4tet/News" && pictureQuartet === "NewsQuartet")
                ? styles.active
                : ""
            }`}
            src={NewsQuartet}
            alt="NewsQuartet"
          />
          <img
            className={`${styles.imageQuartet}  ${
              transition ? styles.transition : ""
            } ${photoSidebarQuartet ? styles.photoSidebarQuartet : null} } ${
              photoSidebarQuartet || path === "/4tet/About"
                ? styles.aboutQuartet
                : null
            } ${
              pictureQuartet === "AboutQuartet" ||
              (path === "/4tet/About" && pictureQuartet === "AboutQuartet")
                ? styles.active
                : ""
            }`}
            src={AboutQuartet}
            alt="AboutQuartet"
          />
          <img
            className={`${styles.imageQuartet}  ${
              transition ? styles.transition : ""
            } ${photoSidebarQuartet ? styles.photoSidebarQuartet : null} ${
              photoSidebarQuartet || path === "/4tet/Contact"
                ? styles.contactQuartet
                : null
            } ${
              pictureQuartet === "ContactQuartet" ||
              (path === "/4tet/Contact" && pictureQuartet === "ContactQuartet")
                ? styles.active
                : ""
            }`}
            src={ContactQuartet}
            alt="ContactQuartet"
          />
          <img
            className={`${styles.imageQuartet}  ${
              transition ? styles.transition : ""
            } ${photoSidebarQuartet ? styles.photoSidebarQuartet : null} ${
              photoSidebarQuartet || path === "/4tet/Live"
                ? styles.liveQuartet
                : null
            } ${
              pictureQuartet === "LiveQuartet" ||
              (path === "/4tet/Live" && pictureQuartet === "LiveQuartet")
                ? styles.active
                : ""
            }`}
            src={LiveQuartet}
            alt="LiveQuartet"
          />
          <img
            className={`${styles.imageQuartet}  ${
              transition ? styles.transition : ""
            } ${photoSidebarQuartet ? styles.photoSidebarQuartet : null} ${
              photoSidebarQuartet || path === "/4tet/Music"
                ? styles.musicQuartet
                : null
            } ${
              pictureQuartet === "MusicQuartet" ||
              (path === "/4tet/Music" && pictureQuartet === "MusicQuartet")
                ? styles.active
                : ""
            }`}
            src={MusicQuartet}
            alt="MusicQuartet"
          />{" "}
          <img
            className={`${styles.imageQuartet}  ${
              transition ? styles.transition : ""
            } ${photoSidebarQuartet ? styles.photoSidebarQuartet : null}  ${
              photoSidebarQuartet || path === "/4tet/Video"
                ? styles.videoQuartet
                : null
            } ${
              pictureQuartet === "VideoQuartet" ||
              (path === "/4tet/Video" && pictureQuartet === "VideoQuartet")
                ? styles.active
                : ""
            }`}
            src={VideoQuartet}
            alt="VideoQuartet"
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
