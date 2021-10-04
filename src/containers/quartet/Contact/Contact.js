import React, { useEffect, useState } from "react";
import styles from "./Contact.module.css";
import { client } from "../../../client";
import marked from "marked";
import ContactForm from "../../../components/ContactForm/ContactForm";
import { openInNewTab } from "../../../components/OpenInNewTab";

function About(props) {
  useEffect(() => {
    client
      .getEntries({ content_type: "contact4tet" })
      .then((res) => {
        setItems(res.items.reverse());
      })
      .catch(console.error);
  }, []);
  const [items, setItems] = useState(null);

  return (
    <div className="container4tet">
      <div>
        {items && props.showContent ? (
          <>
            <button
              className="buttonFullLengthDark"
              onClick={() =>
                openInNewTab("http://eepurl.com/hH-Ba9", "Newsletter")
              }
            >
              Click here to subscribe for the newsletter
            </button>
            <em>Fill out the form to contact me directly</em>
            <ContactForm buttonDark={true} />
            <div className={styles.space}></div>
            {items.map((entry, i) => (
              <div
                className="rowSpacing"
                key={"about" + i}
                dangerouslySetInnerHTML={{
                  __html: marked(entry.fields.text.replace(/\n/g, `</br>`)),
                }}
              />
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
}
export default About;
