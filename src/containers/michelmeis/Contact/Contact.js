import React, { useEffect, useState } from "react";
import styles from "./Contact.module.css";
import { client } from "../../../client";
import marked from "marked";
import ContactForm from "../../../components/ContactForm/ContactForm";
import { openInNewTab } from "../../../components/OpenInNewTab";

function Contact(props) {
  useEffect(() => {
    client
      .getEntries({ content_type: "contact" })
      .then((res) => {
        setItems(res.items.reverse());
      })
      .catch(console.error);
  }, []);
  const [items, setItems] = useState(null);

  return (
    <div className="container">
      {items && props.showContent ? (
        <div>
          {items.map((entry, i) => (
            <div
              className="rowSpacing"
              key={"about" + i}
              dangerouslySetInnerHTML={{
                __html: marked(entry.fields.text.replace(/\n/g, `</br>`)),
              }}
            />
          ))}
          <button
            className="buttonFullLength"
            onClick={() =>
              openInNewTab("http://eepurl.com/hH-Ba9", "Newsletter")
            }
          >
            Click here to subscribe for the newsletter
          </button>
{/*           <em>Fill out the form to contact me directly</em>
          <ContactForm /> */}
        </div>
      ) : null}
    </div>
  );
}
export default Contact;
