import React, { useEffect, useState } from "react";
import styles from "./News.module.css";
import { client } from "../../../client";
import marked from "marked";
import ReactPlayer from "react-player";

function News() {
  useEffect(() => {
    client
      .getEntries({ content_type: "news", order: "fields.index" })
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
      <div className={styles.contentContainer}>
        {items && delay ? (
          <div className={styles.container}>
            {items.map((entry, i) => (
              <div key={"news" + i} className={styles.section}>
                <h2
                  dangerouslySetInnerHTML={{
                    __html: marked(entry.fields.title),
                  }}
                />
                {entry.fields.video ? (
                  <div className={styles.videoContainer}>
                    <ReactPlayer
                      className={styles.video}
                      url={`www.youtube.com/${entry.fields.video.fields.file.fileName}`}
                    />
                  </div>
                ) : null}

                {entry.fields.image ? (
                  <img
                    src={entry.fields.image.fields.file.url}
                    className={styles.image}
                  />
                ) : null}
                <div
                  className={styles.text}
                  dangerouslySetInnerHTML={{
                    __html: marked(entry.fields.text),
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
export default News;
