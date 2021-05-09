import React, { useEffect, useState } from "react";
import styles from "./News.module.css";
import { client } from "../../../client";
import marked from "marked";
import ReactPlayer from "react-player";

function News() {
  useEffect(() => {
    client
      .getEntries({ content_type: "news" /* order: "fields.index" */ })
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
          <div className={styles.fadeIn}>
            {items.map((entry, i) => (
              <div key={"news" + i}>
                <div
                  className="rowSpacing"
                  dangerouslySetInnerHTML={{
                    __html: marked(entry.fields.title),
                  }}
                />
                <div className="row">
                  {entry.fields.image.fields ? (
                    <div className={styles.imageContainer}>
                      <img
                        src={entry.fields.image.fields.file.url}
                        className={styles.image}
                      />
                    </div>
                  ) : null}
                  <div
                    className="rowSpacing"
                    dangerouslySetInnerHTML={{
                      __html: marked(entry.fields.text),
                    }}
                  />
                </div>

                {entry.fields.video ? (
                  <ReactPlayer
                    url={`www.youtube.com/${entry.fields.video.fields.file.fileName}`}
                  />
                ) : null}
                {/*  
                <div
                  className="rowSpacing"
                  key={i}
                  dangerouslySetInnerHTML={{
                    __html: marked(entry.fields.video.fields.file.url),
                  }}
                /> */}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default News;
