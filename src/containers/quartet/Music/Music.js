import React, { useEffect, useState } from "react";
import styles from "./Music.module.css";
import { client } from "../../../client";
import marked from "marked";
import ReactPlayer from "react-player";

function Music() {
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
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className="container4tet">
      <div className={styles.contentContainer}>
        {items ? (
          <div className={styles.container}>
            {items.map((entry, i) => (
              <div key={"news" + i} className={styles.section}>
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
                  Listen
                </button>
                {entry.fields.albumCover ? (
                  <div className={styles.imageContainer}>
                    <img
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
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default Music;
