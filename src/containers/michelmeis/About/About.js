import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
import { client } from "../../../client";
import marked from "marked";

function About() {
  useEffect(() => {
    client
      .getEntries({ content_type: "about", order: "fields.index" })
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
              <div
                className="rowSpacing"
                key={"about" + i}
                dangerouslySetInnerHTML={{
                  __html: marked(entry.fields.aboutText),
                }}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default About;
