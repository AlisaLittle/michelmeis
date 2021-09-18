import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./News.module.css";
import stylesNav from "../../NavBarMM/NavBarMM.module.css";
import { client } from "../../../client";
import marked from "marked";
import ReactPlayer from "react-player";
import { DateFormatter } from "../../../components/DateFormatter/DateFormatter.js";
import NewsQuartet from "../../../pictures/Quartet/News.jpg";

function News(props) {
  useEffect(() => {
    client
      .getEntries({
        content_type: "news",
        order: "fields.index",
        "fields.tet": true,
      })
      .then((res) => {
        console.log("API", res.items);
        setItems(res.items.reverse());
      })
      .catch(console.error);
  }, []);
  const [items, setItems] = useState(null);
  const path = useLocation().pathname;

  return (
    <div className="container4tet">
      <div className="contentContainer">
        {items && props.showContent ? (
          <div className={styles.container}>
            <div className="fadeIn">
              {items.map((entry, i) => (
                <div key={"news" + i} className={styles.section}>
                  <div className={styles.row}>
                    <h1
                      className={styles.title}
                      dangerouslySetInnerHTML={{
                        __html: marked(entry.fields.title.toUpperCase()),
                      }}
                    />

                    <div
                      dangerouslySetInnerHTML={{
                        __html: marked(DateFormatter(entry.fields.date)),
                      }}
                    />
                  </div>

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
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default News;
