import React, { useEffect, useState, useRef } from "react";
import styles from "./Music.module.css";
import { client } from "../../../client";
import marked, { use } from "marked";
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
  const [credits, setCredits] = useState(null);

  const pressRef = useRef();
  const creditRef = useRef();

  const clickPress = (title) => {
    if (press === title) {
      setPress(null);
    } else {
      setPress(title);
      setCredits(null);
      setTimeout(
        () => pressRef.current.scrollIntoView({ behavior: "smooth" }),
        200
      );
    }
  };

  const clickCredits = (title) => {
    if (credits === title) {
      setCredits(null);
    } else {
      setCredits(title);
      setPress(null);
      setTimeout(
        () => creditRef.current.scrollIntoView({ behavior: "smooth" }),
        200
      );
    }
  };
  return (
    <div className="container4tet">
      {items && props.showContent ? (
        <>
          {items.map((entry, i) => (
            <>
              <div key={"news" + i} className={`${styles.section} `}>
                <div className={styles.titleRow}>
                  <h1
                    className={styles.title}
                    dangerouslySetInnerHTML={{
                      __html: marked(entry.fields.id),
                    }}
                  />{" "}
                  <button
                    className="buttonDark"
                    onClick={() =>
                      openInNewTab(entry.fields.linkListen, "Link-Listen")
                    }
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
                  {entry.fields.popUp ? (
                    <button
                      className={`buttonDark ${
                        press === entry.fields.id ? styles.active : null
                      }`}
                      onClick={() => clickPress(entry.fields.id)}
                    >
                      PRESS
                    </button>
                  ) : null}
                  {entry.fields.credits ? (
                    <button
                      className={`buttonDark ${
                        credits === entry.fields.id ? styles.active : null
                      } `}
                      onClick={() => clickCredits(entry.fields.id)}
                    >
                      CREDITS
                    </button>
                  ) : null}
                </div>
              </div>
              {press == entry.fields.id ? (
                <div
                  ref={pressRef}
                  key={"news" + i}
                  className={styles.sectionText}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: marked(entry.fields.popUp),
                    }}
                  />
                </div>
              ) : null}
              {credits == entry.fields.id ? (
                <div
                  ref={creditRef}
                  key={"news" + i}
                  className={styles.section}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: marked(entry.fields.credits),
                    }}
                  />
                </div>
              ) : null}
            </>
          ))}
        </>
      ) : null}
    </div>
  );
}
export default Music;
