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
  const [picture, setPicture] = useState("Home");
  const [pictureQuartet, setPictureQuartet] = useState("HomeQuartet");
  const [transition, setTransition] = useState(false);
  const [photoSidebarQuartet, setPhotoSidebarQuartet] = useState(false);
  const [photoSidebar, setPhotoSidebar] = useState(false);
  const [redirect, setRedirect] = useState(null);
  const [toQuartet, setToQuartet] = useState(false);
  const [toMichelMeis, setToMichelMeis] = useState(false);
  const [doItOnce, setDoItOnce] = useState(true);

  const w =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const h =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

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
          setPhotoSidebar(true);
          setTransition(false);
        }, 700);
      } else {
        setTimeout(() => {
          setPicture(name);
        }, 1000);
        setTimeout(() => {
          setTransition(false);
        }, 1700);
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
      setPictureQuartet(name);
      setTimeout(() => {
        setPhotoSidebarQuartet(true);
        setTransition(false);
      }, 700);
    } else {
      setTimeout(() => {
        setPictureQuartet(name);
      }, 1000);
      setTimeout(() => {
        setTransition(false);
      }, 1700);
    }
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
  console.log("ALLLLISA", path, pictureQuartet);
  const quartetRoute = path.substring(0, 5);

  const goToQuartet = () => {
    setToQuartet(true);
    setToMichelMeis(false);
    setPhotoSidebarQuartet(false);
    setPictureQuartet("/4tet");
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
    setPhotoSidebarQuartet(true);
    const name = path.substring(6);
    setToQuartet(true);
    setToMichelMeis(false);
    setPictureQuartet("/4tet");
    if (quartetRoute !== "/4tet") {
      setTimeout(() => setRedirect("/4tet"), 1000);
    }
    props.setShowContent(false);
    setTimeout(() => props.setShowContent(true), 1000);
    setPictureQuartet(name);
    setDoItOnce(false);
  }
  if (path === "/4tet" && doItOnce) {
    goToQuartet();
    setDoItOnce(false);
  }

  return (
    <div className={styles.screen}>
      <div
        className={`${styles.doubleWidth} ${
          toQuartet || path === "/4tet" ? styles.rowToRight : null
        } ${toMichelMeis ? styles.rowToLeft : null}`}
      >
        <div className={styles.container} /* style={{ width: w, height: h }} */>
          {redirect ? <Redirect to={`${redirect}`} /> : null}
          <div className="row">
            <div className={styles.boxTop}>
              <div
                className={`${styles.first} ${styles.main} ${styles.mainWidth} `}
                onClick={() => handleHome("Home")}
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
              } ${photoSidebar ? styles.photoSidebar : null} ${styles.home} ${
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
              } ${photoSidebar ? styles.photoSidebar : null} ${styles.news} ${
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
              } ${photoSidebar ? styles.photoSidebar : null} ${styles.about} ${
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
                styles.projects
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
              } ${photoSidebar ? styles.photoSidebar : null} ${styles.live} ${
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
                styles.contact
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
        <div className={styles.quartet} style={{ width: w, height: h }}>
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
          <div className={styles.boxBottomQuartet}>
            <SocialMedia quartet={true} />
            <div
              className={`${styles.firstDark} ${styles.main}`}
              onClick={() => handleHomeQuartet("/4tet")}
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
                  onClick={() => handleClickQuartet("/4tet/" + route.name)}
                >
                  {route.name.toUpperCase()}
                </div>
              );
            })}
          </nav>
          <img
            className={`${styles.imageQuartet} ${
              transition ? styles.transition : ""
            }  ${photoSidebarQuartet ? styles.photoSidebarQuartet : null} ${
              styles.homeQuartet
            } ${
              pictureQuartet === "/4tet" ||
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
            } ${photoSidebarQuartet ? styles.photoSidebarQuartet : null} ${
              styles.newsQuartet
            } ${
              pictureQuartet === "/4tet/News" ||
              (path === "/4tet/News" && pictureQuartet === "News")
                ? styles.active
                : ""
            }`}
            src={NewsQuartet}
            alt="NewsQuartet"
          />
          <img
            className={`${styles.imageQuartet}  ${
              transition ? styles.transition : ""
            } ${photoSidebarQuartet ? styles.photoSidebarQuartet : null} ${
              styles.aboutQuartet
            }  ${
              pictureQuartet === "/4tet/About" ||
              (path === "/4tet/About" && pictureQuartet === "About")
                ? styles.active
                : ""
            }`}
            src={AboutQuartet}
            alt="AboutQuartet"
          />
          <img
            className={`${styles.imageQuartet}  ${
              transition ? styles.transition : ""
            } ${photoSidebarQuartet ? styles.photoSidebarQuartet : null}  ${
              styles.contactQuartet
            } ${
              pictureQuartet === "/4tet/Contact" ||
              (path === "/4tet/Contact" && pictureQuartet === "Contact")
                ? styles.active
                : ""
            }`}
            src={ContactQuartet}
            alt="ContactQuartet"
          />
          <img
            className={`${styles.imageQuartet}  ${
              transition ? styles.transition : ""
            } ${photoSidebarQuartet ? styles.photoSidebarQuartet : null}  ${
              styles.liveQuartet
            }  ${
              pictureQuartet === "/4tet/Live" ||
              (path === "/4tet/Live" && pictureQuartet === "Live")
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
              styles.musicQuartet
            }  ${
              pictureQuartet === "/4tet/Music" ||
              (path === "/4tet/Music" && pictureQuartet === "Music")
                ? styles.active
                : ""
            }`}
            src={MusicQuartet}
            alt="MusicQuartet"
          />{" "}
          <img
            className={`${styles.imageQuartet}  ${
              transition ? styles.transition : ""
            } ${photoSidebarQuartet ? styles.photoSidebarQuartet : null} ${
              styles.videoQuartet
            }  ${
              pictureQuartet === "/4tet/Video" ||
              (path === "/4tet/Video" && pictureQuartet === "Video")
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
