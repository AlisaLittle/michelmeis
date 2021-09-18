import React, { useEffect, useState } from "react";
import styles from "./Music.module.css";
import { client } from "../../../client";
import marked from "marked";
import { openInNewTab } from "../../../components/OpenInNewTab";

function Music(props) {
  useEffect(() => {
    client
      .getEntries({
        content_type: "music4tet",
        order: "fields.index",
      })
      .then((res) => {
        console.log("API", res.items);
        setItems(res.items.reverse());
      })
      .catch(console.error);
  }, []);
  const [items, setItems] = useState(null);
  const [press, setPress] = useState(null);
  return (
    <div className="container4tet">
      <div className="contentContainer">
        <div className="fadeIn">
          {items && props.showContent ? (
            <div className={styles.container}>
              {items.map((entry, i) => (
                <>
                  <div key={"news" + i} className={styles.section}>
                    <div className={styles.titleRow}>
                      <h1
                        className={styles.title}
                        dangerouslySetInnerHTML={{
                          __html: marked(entry.fields.id),
                        }}
                      />{" "}
                      <button
                        className="buttonDark"
                        onClick={() => openInNewTab(entry.fields.linkListen)}
                      >
                        LISTEN
                      </button>
                    </div>
                    {entry.fields.albumCover ? (
                      <div className={styles.imageContainer}>
                        <img
                          alt="cover"
                          src={entry.fields.albumCover.fields.file.url}
                          className={styles.image}
                        />
                      </div>
                    ) : null}
                    <div
                      className={styles.text}
                      dangerouslySetInnerHTML={{
                        __html: marked(entry.fields.press),
                      }}
                    />
                    <div className={`row ${styles.spaceBetween}`}>
                      <button
                        className="buttonDark"
                        onClick={() => setPress(entry.fields.id)}
                      >
                        PRESS
                      </button>
                      <button className="buttonDark">CREDITS</button>
                    </div>
                  </div>
                  {press == entry.fields.id ? (
                    <div key={"news" + i} className={styles.section}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: marked(entry.fields.popUp),
                        }}
                      />
                    </div>
                  ) : null}
                </>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default Music;
