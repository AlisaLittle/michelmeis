import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import { client } from "../../../client";
import marked from "marked";
import ReactPlayer from "react-player";

function Projects() {
  useEffect(() => {
    client
      .getEntries({ content_type: "projects", order: "fields.index" })
      .then((res) => {
        console.log("API", res.items);
        setItems(res.items.reverse());
        handleDelay();
      })
      .catch(console.error);
  }, []);
  const [items, setItems] = useState(null);
  const [delay, setDelay] = useState(false);

  const handleDelay = () => {
    setTimeout(() => {
      setDelay(true);
    }, 500);
  };
  return (
    <div className="container">
      <div className="contentContainer">
        {items && delay ? (
          <div className="fadeIn">
            <div className={styles.container}>
              {items.map((entry, i) => (
                <div key={"news" + i}>
                  {/*      <h2
                  className="rowSpacing"
                  dangerouslySetInnerHTML={{
                    __html: marked(entry.fields.title),
                  }}
                /> */}
                  {entry.fields.image.fields ? (
                    <div className={styles.relative}>
                      <img
                        src={entry.fields.image.fields.file.url}
                        className={styles.image}
                        alt="img"
                      ></img>
                      {/*       <div
                        className={styles.title}
                        dangerouslySetInnerHTML={{
                          __html: marked(entry.fields.title),
                        }}
                      ></div> */}
                    </div>
                  ) : null}
                  {/*     <div className={`column ${styles.marginLeft}`}>
                    <div
                      className={styles.genre}
                      dangerouslySetInnerHTML={{
                        __html: marked(entry.fields.genre),
                      }}
                    />

                    <div
                      dangerouslySetInnerHTML={{
                        __html: marked(entry.fields.text),
                      }}
                    />
                    <div className={`row ${styles.marginTop}`}>
                      <button className={`${styles.button} ${styles.margin}`}>
                        Infos
                      </button>
                      <button className={styles.button}>Videos</button>
                    </div>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default Projects;
