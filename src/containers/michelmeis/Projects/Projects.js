import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import { client } from "../../../client";
import "react-image-gallery/styles/css/image-gallery.css";
import marked from "marked";

function Projects(props) {
  useEffect(() => {
    client
      .getEntries({ content_type: "projects", order: "fields.index" })
      .then((res) => {
        console.log("API", res.items);
        const response = res.items.reverse();
        setItems(response);
      })
      .catch(console.error);
  }, []);
  const [items, setItems] = useState(null);
  const [picture, setPicture] = useState(null);

  const handleClick = (title) => {
    setPicture(title);
  };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className={`${picture ? styles.background : null}`}>
      {items ? (
        <>
          <div className={styles.titleContainer}>
            {items.map((entry, i) => (
              <>
                <div
                  className={styles.title}
                  dangerouslySetInnerHTML={{
                    __html: marked(entry.fields.title),
                  }}
                  onClick={() => handleClick(entry.fields.title)}
                ></div>
                <div
                  className={`${styles.buttonContainer}  ${
                    picture === entry.fields.title ? styles.active : null
                  } ${
                    picture === entry.fields.title
                      ? styles.buttonContainerTransition
                      : null
                  }`}
                >
                  {picture === entry.fields.title ? (
                    <>
                      <div
                        className={styles.genre}
                        dangerouslySetInnerHTML={{
                          __html: marked(entry.fields.genre),
                        }}
                      ></div>
                      <div className={`row ${styles.marginTop}`}>
                        <button
                          className={`button ${styles.margin}`}
                          onClick={() => openInNewTab(entry.fields.linkInfo)}
                        >
                          Infos
                        </button>
                        <button
                          className="button"
                          onClick={() => openInNewTab(entry.fields.linkVideo)}
                        >
                          Videos
                        </button>
                      </div>
                    </>
                  ) : null}
                </div>
              </>
            ))}
          </div>
          {items.map((entry, i) => (
            <>
              {entry.fields.image.fields ? (
                <div className={styles.darker}>
                  <img
                    src={entry.fields.image.fields.file.url}
                    className={`${styles.image} ${
                      picture === entry.fields.title ? styles.active : null
                    }`}
                    alt="img"
                  ></img>
                </div>
              ) : null}
            </>
          ))}
        </>
      ) : null}
    </div>
  );
}

export default React.memo(Projects);
