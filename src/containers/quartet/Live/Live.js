import React, { useEffect, useState } from "react";
import styles from "./Live.module.css";
import { client } from "../../../client";
import marked from "marked";
import { DateFormatter } from "../../../components/DateFormatter/DateFormatter.js";

function Live() {
  useEffect(() => {
    client
      .getEntries({
        content_type: "live",
        order: "fields.date",
        "fields.tet": true,
      })
      .then((res) => {
        console.log("API", res.items);
        console.log("DAte", new Date());
        setItems(res.items);
      })
      .catch(console.error);
  }, []);
  const [items, setItems] = useState(null);

  return (
    <div className="container4tet">
      <div className="contentContainer">
        <div className="fadeIn">
          {items
            ? items.map((item, i) => (
                <div key={"live" + i} className={styles.row}>
                  <div className="column">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: marked(DateFormatter(item.fields.date)),
                      }}
                    />
                    <div
                      dangerouslySetInnerHTML={{
                        __html: marked(item.fields.band),
                      }}
                    />
                  </div>
                  <div className="column">
                    <div
                      className={styles.column}
                      dangerouslySetInnerHTML={{
                        __html: marked(item.fields.location),
                      }}
                    />
                    <div
                      className={styles.column}
                      dangerouslySetInnerHTML={{
                        __html: marked(item.fields.city),
                      }}
                    />
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
export default Live;
