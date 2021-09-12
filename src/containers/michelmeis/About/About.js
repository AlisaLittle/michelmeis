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
        setItems(res.items);
      })
      .catch(console.error);
  }, []);
  const [items, setItems] = useState(null);

  return (
    <div className="container">
      <div className="contentContainer">
        {items ? (
          <div className="fadeIn">
            <div className={styles.align}>
              {items.map((entry, i) => (
                <div className={styles.row}>
                  <div
                    className={styles.text}
                    key={"about" + i}
                    dangerouslySetInnerHTML={{
                      __html: marked(entry.fields.aboutText),
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
