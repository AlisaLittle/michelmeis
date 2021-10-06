import React, { useEffect, useState } from "react";
import styles from "./Video.module.css";
import { client } from "../../../client";
import ReactPlayer from "react-player";

function Video(props) {
  useEffect(() => {
    client
      .getEntries({
        content_type: "video",
        order: "fields.index",
      })
      .then((res) => {
        setItems(res.items.reverse());
      })
      .catch(console.error);
  }, []);
  const [items, setItems] = useState(null);

  return (
    <div className={styles.container4tet}>
      <div className={styles.contentContainer}>
        {items && props.showContent ? (
          <div className={styles.container}>
            {items.map((entry, i) => (
              <div key={"news" + i} className={styles.section}>
                {entry.fields.video ? (
                  <div className={styles.videoContainer}>
                    <ReactPlayer
                      width="100%"
                      height="100%"
                      style={{ position: "absolute", top: 0, left: 0 }}
                      controls={true}
                      url={`www.youtube.com/${entry.fields.video.fields.file.fileName}`}
                    />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default Video;
