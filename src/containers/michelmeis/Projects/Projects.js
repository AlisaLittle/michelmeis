import React, { useEffect, useState, useRef } from "react";
import styles from "./Projects.module.css";
import { client } from "../../../client";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import marked from "marked";
import ReactPlayer from "react-player";

function Projects() {
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
        handleDelay();
        console.log("API", filteredItems);
      })
      .catch(console.error);
  }, []);
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);
  const [delay, setDelay] = useState(false);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleDelay = () => {
    setTimeout(() => {
      setDelay(true);
    }, 500);
  };
  const handleClick = (e, i) => {
    setIndex(i);
    console.log("index", index);
  };
  /*   const filterFunction = items.map((item) => ({
    original: item.fields.image.fields.file.url,
  }));
  console.log(filterFunction); */

  return (
    <div className="container">
      <div className="contentContainer">
        {items && delay ? (
          <div className="fadeIn">
            <div className={styles.galleryContainer}>
              <div className={styles.gallery}>
                <div className={styles.info}>
                  <h2
                    className="rowSpacing"
                    dangerouslySetInnerHTML={{
                      __html: marked(items[index].fields.title),
                    }}
                  />
                </div>
                <ImageGallery
                  items={filteredItems}
                  originalClass={styles.image}
                  showNav={false}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  slideDuration={null}
                  slideInterval={2000000000000000000000}
                  thumbnailPosition="bottom"
                  disableThumbnailScroll={true}
                  onThumbnailClick={(e, i) => handleClick(e, i)}
                />
              </div>
            </div>
            {items.map((entry, i) => (
              <div key={"news" + i}>
                {/*      <h2
                  className="rowSpacing"
                  dangerouslySetInnerHTML={{
                    __html: marked(entry.fields.title),
                  }}
                /> */}
                {/*                 
                   
                  {/*           {entry.fields.image.fields ? (
                    <div className={styles.relative}>
                      <img
                        src={entry.fields.image.fields.file.url}
                        className={styles.image}
                        alt="img"
                      ></img>
                    </div>
                  ) : null} */}
                {/*    
                  
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
                  </div> */}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default Projects;
