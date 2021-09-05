import React, { useEffect, useState, useRef } from "react";
import styles from "./Projects.module.css";
import { client } from "../../../client";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import marked from "marked";
import ReactPlayer from "react-player";

function Projects(props) {
  useEffect(() => {
    client
      .getEntries({ content_type: "projects", order: "fields.index" })
      .then((res) => {
        const response = res.items.reverse();
        setItems(response);
        setFilteredItems(
          response.map((item) => ({
            original: item.fields.image.fields.file.url,
            thumbnail: item.fields.image.fields.file.url,
          }))
        );
        console.log("API", filteredItems);
      })
      .catch(console.error);
  }, []);
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);
  const [picture, setPicture] = useState(null);

  const handleClick = (title) => {
    setPicture(title);
  };
  /*   const filterFunction = items.map((item) => ({
    original: item.fields.image.fields.file.url,
  }));
  console.log(filterFunction); */

  return (
    <div className={`${picture ? styles.background : null}`}>
      {items ? (
        <>
          <div className={styles.titleContainer}>
            {items.map((entry, i) => (
              <>
                <div
                  className={styles.title}
                  dangerouslySetInnerHTML={{
                    __html: marked(entry.fields.title),
                  }}
                  onClick={() => handleClick(entry.fields.title)}
                ></div>
                <div
                  className={`${styles.buttonContainer}  ${
                    picture === entry.fields.title ? styles.active : null
                  } ${
                    picture === entry.fields.title
                      ? styles.buttonContainerTransition
                      : null
                  }`}
                >
                  {picture === entry.fields.title ? (
                    <div className={`row ${styles.marginTop}`}>
                      <button className={`button ${styles.margin}`}>
                        Infos
                      </button>
                      <button className="button">Videos</button>
                    </div>
                  ) : null}
                </div>
              </>
            ))}
          </div>
          {items.map((entry, i) => (
            <>
              {entry.fields.image.fields ? (
                <div className={styles.darker}>
                  <img
                    src={entry.fields.image.fields.file.url}
                    className={`${styles.image} ${
                      picture === entry.fields.title ? styles.active : null
                    }`}
                    alt="img"
                  ></img>
                </div>
              ) : null}
            </>
          ))}
        </>
      ) : null}
    </div>
  );
}

export default React.memo(Projects);
{
  /*        {items.map((entry, i) => (
              <div key={"news" + i}>
                <h2
                  className="rowSpacing"
                  dangerouslySetInnerHTML={{
                    __html: marked(entry.fields.title),
                  }}
                />

                {entry.fields.image.fields ? (
                  <div className={styles.relative}>
                    <img
                      src={entry.fields.image.fields.file.url}
                      className={styles.image}
                      alt="img"
                    ></img>
                  </div>
                ) : null}

                <div
                  className={styles.title}
                  dangerouslySetInnerHTML={{
                    __html: marked(entry.fields.title),
                  }}
                ></div>
                <div className={`column ${styles.marginLeft}`}>
                  <div
                    className={styles.genre}
                    dangerouslySetInnerHTML={{
                      __html: marked(entry.fields.genre),
                    }}
                  />

                  <div
                    dangerouslySetInnerHTML={{
                      __html: marked(entry.fields.text),
                    }}
                  />
                  <div className={`row ${styles.marginTop}`}>
                    <button className={`${styles.button} ${styles.margin}`}>
                      Infos
                    </button>
                    <button className={styles.button}>Videos</button>
                  </div>
                </div>
              </div>
            ))} */
}
