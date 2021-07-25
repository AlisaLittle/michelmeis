import React, { useEffect, useState } from "react";
import styles from "./Contact.module.css";
import { client } from "../../../client";
import marked from "marked";
import ContactForm from "../../../components/ContactForm/ContactForm";

function About() {
  useEffect(() => {
    client
      .getEntries({ content_type: "contact" })
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
        <div className="fadeIn">
          <div className={styles.align}>
            <div>
              {items && delay ? (
                <>
                  {items.map((entry, i) => (
                    <div
                      className="rowSpacing"
                      key={"about" + i}
                      dangerouslySetInnerHTML={{
                        __html: marked(
                          entry.fields.text.replace(/\n/g, `</br>`)
                        ),
                      }}
                    />
                  ))}
                  <ContactForm />
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
