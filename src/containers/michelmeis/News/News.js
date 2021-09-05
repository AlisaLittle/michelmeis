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
      })
      .catch(console.error);
  }, []);
  const [items, setItems] = useState(null);

  return (
    <div className="container">
      <div className={styles.contentContainer}>
        {items ? (
          <div className={styles.container}>
            <div className="fadeIn">
              {items.map((entry, i) => (
                <div key={"news" + i} className={styles.section}>
                  <h1
                    className={styles.title}
                    dangerouslySetInnerHTML={{
                      __html: marked(entry.fields.title),
                    }}
                  />

                  {entry.fields.video ? (
                    <div className={styles.videoContainer}>
                      <ReactPlayer
                        width="100%"
                        height="100%"
                        url={`www.youtube.com/${entry.fields.video.fields.file.fileName}`}
                      />
                    </div>
                  ) : null}

                  {entry.fields.image ? (
                    <div className={styles.imageContainer}>
                      <img
                        src={entry.fields.image.fields.file.url}
                        className={styles.image}
                      />
                    </div>
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
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default News;
