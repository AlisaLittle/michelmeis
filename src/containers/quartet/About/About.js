import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
import { client } from "../../../client";
import marked from "marked";

function About(props) {
  useEffect(() => {
    client
      .getEntries({ content_type: "about4tet", order: "fields.index" })
      .then((res) => {
        setItems(res.items);
      })
      .catch(console.error);
  }, []);
  const [items, setItems] = useState(null);

  return (
    <div className="container4tet">
      {items && props.showContent ? (
        <>
          {items.map((entry, i) => (
            <>
              <div
                className={styles.text}
                key={"about" + i}
                dangerouslySetInnerHTML={{
                  __html: marked(entry.fields.text),
                }}
              />
            </>
          ))}
        </>
      ) : null}
    </div>
  );
}
export default About;
