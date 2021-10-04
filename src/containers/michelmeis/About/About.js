import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
import { client } from "../../../client";
import marked from "marked";

function About(props) {
  useEffect(() => {
    client
      .getEntries({ content_type: "about", order: "fields.index" })
      .then((res) => {
        setItems(res.items);
      })
      .catch(console.error);
  }, []);
  const [items, setItems] = useState(null);

  return (
    <div className="container">
      {items && props.showContent ? (
        <div>
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
      ) : null}
    </div>
  );
}
export default About;
