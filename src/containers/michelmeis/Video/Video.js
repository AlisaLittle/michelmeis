import React, { useEffect, useState } from "react";
import styles from "./Video.module.css";
import { client } from "../../../client";
import marked from "marked";
import ReactPlayer from "react-player";

function Video() {
  useEffect(() => {
    client
      .getEntries({ content_type: "video", order: "fields.index" })
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
            {items.map((entry, i) => (
              <ReactPlayer
                className={styles.video}
                url={`www.youtube.com/${entry.fields.video.fields.file.fileName}`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default Video;
