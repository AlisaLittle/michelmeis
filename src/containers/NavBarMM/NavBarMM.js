import React, { useState } from "react";
import Home from "../../pictures/Home.jpg";
import styles from "./NavBarMM.module.css";
import { Redirect, useLocation } from "react-router-dom";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import News from "../../pictures/Meis/News.jpg";
import About from "../../pictures/Meis/About.jpg";
import Projects from "../../pictures/Meis/Projects.jpg";
import Video from "../../pictures/Meis/Video.jpg";
import Live from "../../pictures/Meis/Live.jpg";
import Contact from "../../pictures/Meis/Contact.jpg";
import ContactQuartet from "../../pictures/Quartet/Home.jpg";
import AboutQuartet from "../../pictures/Quartet/About.jpg";
import HomeQuartet from "../../pictures/Quartet/Contact.jpg";
import LiveQuartet from "../../pictures/Quartet/Live.jpg";
import MusicQuartet from "../../pictures/Quartet/Music.jpg";
import NewsQuartet from "../../pictures/Quartet/News.jpg";
import VideoQuartet from "../../pictures/Quartet/Video.jpg";

function NavBar(props) {
  const [secondTransition, setSecondTransition] = useState(false);
  const [picture, setPicture] = useState("Home");
  const [pictureQuartet, setPictureQuartet] = useState("HomeQuartet");
  const [transition, setTransition] = useState(false);
  const [photoSidebarQuartet, setPhotoSidebarQuartet] = useState(false);
  const [photoSidebar, setPhotoSidebar] = useState(false);
  const [redirect, setRedirect] = useState(null);
  const [toQuartet, setToQuartet] = useState(false);
  const [toMichelMeis, setToMichelMeis] = useState(false);
  const [delayHandler, setDelayHandler] = useState(null);
  const [doItOnce, setDoItOnce] = useState(true);

  const path = useLocation().pathname;
  const routes = [
    { name: "News", picture: News },
    { name: "About", picture: About },
    { name: "Projects", picture: Projects },
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
    props.setShowContent(false);
    setTimeout(() => props.setShowContent(true), 1500);
    if (name === "Projects") {
      handleHome(name);
    } else {
      setTimeout(() => {
        setTransition(true);
        setRedirect(name);
      }, 0);
      if (!photoSidebar) {
        setPicture(name);
        setTimeout(() => {
          setSecondTransition(true);
        }, 300);
        setTimeout(() => {
          setPhotoSidebar(true);
          setTransition(false);
        }, 400);
        setTimeout(() => {
          setSecondTransition(false);
        }, 2000);
      } else {
        setTimeout(() => {
          setPicture(name);
        }, 1000);
        setTimeout(() => {
          setTransition(false);
          setSecondTransition(true);
        }, 1500);
        setTimeout(() => {
          setSecondTransition(false);
        }, 2500);
      }
    }
  };

  const handleClickQuartet = (name) => {
    props.setShowContent(false);
    setTimeout(() => props.setShowContent(true), 1500);
    setTimeout(() => {
      setTransition(true);
      setRedirect(name);
    }, 0);
    if (!photoSidebarQuartet) {
      console.log("1");

      setPictureQuartet(name);
      setTimeout(() => {
        setSecondTransition(true);
      }, 300);
      setTimeout(() => {
        setPhotoSidebarQuartet(true);
        setTransition(false);
      }, 400);
      setTimeout(() => {
        setSecondTransition(false);
      }, 2000);
    } else {
      console.log("2");
      setTimeout(() => {
        setPictureQuartet(name);
      }, 1000);
      setTimeout(() => {
        setTransition(false);
        setSecondTransition(true);
      }, 1500);
      setTimeout(() => {
        setSecondTransition(false);
      }, 2500);
    }
  };
  console.log(pictureQuartet);
  const handleHover = (name) => {
    /*     if (!transition && !secondTransition) {
      setDelayHandler(
        setTimeout(() => {
          setPicture(name);
        }, 500)
      );
    } else {
      return null;
    } */
  };
  const handleHoverQuartet = (name) => {
    /*     if (!transition && !secondTransition) {
      setDelayHandler(
        setTimeout(() => {
          setPictureQuartet(name);
        }, 500)
      );
    } else {
      return null;
    } */
  };
  const handleMouseLeave = () => {
    /*     clearTimeout(delayHandler); */
  };

  const handleHome = (title) => {
    setTimeout(() => {
      setPicture(title);
    }, 1000);
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
    setTimeout(() => {
      setPictureQuartet(title);
    }, 1000);
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
    props.setShowContent(false);
    setTimeout(() => props.setShowContent(true), 1000);
  };

  const [oneTime, setOneTime] = useState(true);
  if (props.toQuartet && oneTime) {
    props.setToQuartet(false);
    setOneTime(false);
    goToQuartet();
    setTimeout(() => setOneTime(true), 2000);
  }
  const goToMichelMeis = () => {
    setToQuartet(false);
    setToMichelMeis(true);
    setPhotoSidebar(false);
    setPicture("Home");
    setTimeout(() => setRedirect("/"), 1000);
    setTimeout(() => setToMichelMeis(false), 1000);
    props.setShowContent(false);
    setTimeout(() => props.setShowContent(true), 1000);
  };

  if (
    path !== "/" &&
    path !== "/Projects" &&
    quartetRoute !== "/4tet" &&
    doItOnce
  ) {
    const name = path.substring(1);
    setPhotoSidebar(true);
    setPicture(name);
    setDoItOnce(false);
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
                <div className={styles.icon}>
                  <svg
                    id="triangle"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 31 50"
                  >
                    <defs></defs>
                    <title>Triangle</title>
                    <polygon points="0.5 1.04 30.2 25 0.5 48.95 0.5 1.04" />
                    <path
                      d="M3,2.09,31.41,25,3,47.91V2.09M2,0V50L33,25,2,0Z"
                      transform="translate(-2 0)"
                    />
                  </svg>
                </div>
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
                picture === "Home" || (path === "/Home" && picture === "Home")
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
                picture === "News" || (path === "/News" && picture === "News")
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
                picture === "About" ||
                (path === "/About" && picture === "About")
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
                picture === "Projects" ||
                (path === "/Projects" && picture === "Projects")
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
                picture === "Live" || (path === "/Live" && picture === "Live")
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
                picture === "Contact" ||
                (path === "/Contact" && picture === "Contact")
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
                <div className={`${styles.icon} ${styles.iconLeft}`}>
                  {" "}
                  <svg
                    id="triangle"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 31 50"
                  >
                    <defs></defs>
                    <title>Triangle</title>
                    <polygon points="0.5 1.04 30.2 25 0.5 48.95 0.5 1.04" />
                    <path
                      d="M3,2.09,31.41,25,3,47.91V2.09M2,0V50L33,25,2,0Z"
                      transform="translate(-2 0)"
                    />
                  </svg>
                </div>
                MM
              </div>
            )}
          </div>
          <div className={styles.boxBottom}>
            <SocialMedia quartet={true} />
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
                      ? styles.navPointActiveQuartet
                      : null
                  } `}
                  onMouseOver={() => handleHoverQuartet(route.name + "Quartet")}
                  onMouseLeave={() => handleMouseLeave()}
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
            } ${photoSidebarQuartet ? styles.photoSidebarQuartet : null}  ${
              pictureQuartet === "/4tet/News" ||
              (path === "/4tet/News" && pictureQuartet === "/4tet/News")
                ? styles.active
                : ""
            }`}
            src={NewsQuartet}
            alt="NewsQuartet"
          />
          <img
            className={`${styles.imageQuartet}   ${
              photoSidebarQuartet ? styles.photoSidebarQuartet : null
            } ${
              photoSidebarQuartet || path === "/4tet"
                ? styles.homeQuartet
                : null
            } ${
              path === "/4tet" ||
              (path === "/4tet" && pictureQuartet === "/4tet")
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
              photoSidebarQuartet || path === "/4tet/About"
                ? styles.aboutQuartet
                : null
            } ${
              pictureQuartet === "/4tet/About" ||
              (path === "/4tet/About" && pictureQuartet === "/4tet/About")
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
              pictureQuartet === "/4tet/Contact" ||
              (path === "/4tet/Contact" && pictureQuartet === "/4tet/Contact")
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
              pictureQuartet === "/4tet/Live" ||
              (path === "/4tet/Live" && pictureQuartet === "/4tet/Live")
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
              pictureQuartet === "/4tet/Music" ||
              (path === "/4tet/Music" && pictureQuartet === "/4tet/Music")
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
              pictureQuartet === "/4tet/Video" ||
              (path === "/4tet/Video" && pictureQuartet === "/4tet/Video")
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
