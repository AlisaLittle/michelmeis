import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
import { client } from "../../../client";

function About() {
  useEffect(() => {
    client
      .getEntries({ content_type: "about", order: "fields.index" })
      .then((res) => {
        console.log("API", res.items[0].fields.aboutText);
        setItems(res.items.reverse());
        handleDelay();
      })
      .catch(console.error);
  }, []);
  const [items, setItems] = useState(null);
  const [delay, setDelay] = useState(false);
  if (items) {
    console.log(items.reverse());
  }
  const handleDelay = () => {
    setTimeout(() => {
      setDelay(true);
    }, 100);
  };
  return (
    <div className="container">
      <div className="contentContainer">
        {items && delay ? (
          <div className={styles.fadeIn}>
            {items.map((entry, i) => (
              <div className="rowSpacing" key={i}>
                {entry.fields.aboutText}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default About;
