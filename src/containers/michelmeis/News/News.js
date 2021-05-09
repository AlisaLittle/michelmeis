import React, { useEffect, useState } from "react";
import styles from "./News.module.css";
import { client } from "../../../client";

function News() {
  useEffect(() => {
    client
      .getEntries({ content_type: "about" })
      .then((res) => {
        console.log("API", res.items[0].fields.aboutText);
        setItems(res.items);
      })
      .catch(console.error);
  }, []);

  const [items, setItems] = useState(null);
  return (
    <div className="container">
      <div className="contentContainer">
        {items ? (
          <>
            {items.map((entry, i) => (
              <>
                <div>{entry.fields.aboutText}</div>
              </>
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
}
export default News;
