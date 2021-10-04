import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./News.module.css";
import { client } from "../../../client";
import marked from "marked";
import ReactPlayer from "react-player";
import { DateFormatter } from "../../../components/DateFormatter/DateFormatter.js";
import useWindowDimensions from "../../../components/windowDimensions";

function News(props) {
  useEffect(() => {
    client
      .getEntries({
        content_type: "news",
        order: "fields.index",
        "fields.tet": true,
      })
      .then((res) => {
        setItems(res.items.reverse());
      })
      .catch(console.error);
  }, []);
  const [items, setItems] = useState(null);
  const windowDesktop = useWindowDimensions().width > 1100 ? true : false;

  return (
    <div className="container4tet">
      {items && props.showContent ? (
        <>
          {items.map((entry, i) => (
            <div key={"news" + i} className={styles.section}>
              <div
                dangerouslySetInnerHTML={{
                  __html: marked(DateFormatter(entry.fields.date)),
                }}
              />{" "}
              <h2
                className={styles.title}
                dangerouslySetInnerHTML={{
                  __html: marked(entry.fields.title.toUpperCase()),
                }}
              />
              {entry.fields.video ? (
                <div className={styles.videoContainer}>
                  {windowDesktop ? (
                    <ReactPlayer
                      width="100%"
                      height="100%"
                      style={{ position: "absolute", top: 0, left: 0 }}
                      playing={true}
                      muted={true}
                      controls={true}
                      url={`www.youtube.com/${entry.fields.video.fields.file.fileName}`}
                    />
                  ) : (
                    <ReactPlayer
                      width="100%"
                      height="100%"
                      style={{ position: "absolute", top: 0, left: 0 }}
                      controls={true}
                      url={`www.youtube.com/${entry.fields.video.fields.file.fileName}`}
                    />
                  )}
                </div>
              ) : null}
              {entry.fields.image ? (
                <div className={styles.imageContainer}>
                  <img
                    alt="img"
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
        </>
      ) : null}
    </div>
  );
}
export default News;
