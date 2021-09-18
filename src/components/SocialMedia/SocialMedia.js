import React from "react";
import styles from "./SocialMedia.module.css";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

function SocialMedia(props) {
  const handleLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className={props.quartet ? styles.containerQuartet : styles.container}>
      <FaFacebook
        className={props.quartet ? styles.iconQuartet : styles.icon}
        onClick={() =>
          handleLink(
            props.quartet
              ? "https://www.facebook.com/michelmeis4tet"
              : "https://www.facebook.com/michel.meis"
          )
        }
      />
      <FaInstagram
        className={props.quartet ? styles.iconQuartet : styles.icon}
        onClick={() =>
          handleLink(
            props.quartet
              ? "https://www.instagram.com/michelmeis4tet"
              : "https://www.instagram.com/michel_meis"
          )
        }
      />

      {props.quartet ? (
        <FaYoutube
          className={styles.iconQuartet}
          onClick={() =>
            handleLink(
              "https://www.youtube.com/channel/UCdjZkLmz7oE7WIM51PSDMMQ"
            )
          }
        />
      ) : null}
    </div>
  );
}
export default SocialMedia;
