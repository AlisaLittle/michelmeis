import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
import { client } from "../../../client";
import marked from "marked";

function About() {
  useEffect(() => {
    client
      .getEntries({ content_type: "about4tet", order: "fields.index" })
      .then((res) => {
        console.log("API", res.items);
        setItems(res.items);
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
    <div className="container4tet">
      <div className="contentContainer">
        {items && delay ? (
          <div className="fadeIn">
            <div className={styles.align}>
              {items.map((entry, i) => (
                <div className={styles.row}>
                  <div
                    className={styles.text}
                    key={"about" + i}
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
export default About;
