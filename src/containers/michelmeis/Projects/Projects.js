import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import { client } from "../../../client";
import "react-image-gallery/styles/css/image-gallery.css";
import marked from "marked";
import { openInNewTab } from "../../../components/OpenInNewTab";

function Projects(props) {
  useEffect(() => {
    client
      .getEntries({ content_type: "projects", order: "fields.index" })
      .then((res) => {
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

  return (
    <div className={`${picture ? styles.background : null}`}>
      {items && props.showContent ? (
        <>
          <div className={styles.titleContainer}>
            {items.map((entry, i) => (
              <React.Fragment key={i}>
                <div
                  className={`${styles.title} ${
                    picture == entry.fields.title ? styles.active : null
                  }`}
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
                      {entry.fields.title === "Michel Meis 4tet" ? (
                        <button
                          className={`button `}
                          onClick={() => {
                            props.setToQuartet(true);
                            props.setShowContent(false);
                            setTimeout(() => props.setShowContent(true), 1500);
                          }}
                        >
                          Info
                        </button>
                      ) : (
                        <button
                          className={`button `}
                          onClick={() =>
                            openInNewTab(
                              entry.fields.linkInfo,
                              entry.fields.title
                            )
                          }
                        >
                          Info
                        </button>
                      )}

                      <div
                        className={`${styles.marginTop} ${styles.text}`}
                        dangerouslySetInnerHTML={{
                          __html: marked(entry.fields.text),
                        }}
                      ></div>
                    </>
                  ) : null}
                </div>
              </React.Fragment>
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
