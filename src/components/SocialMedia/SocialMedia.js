import React, { useEffect, useState } from "react";
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
        onClick={() => handleLink("https://www.facebook.com/michel.meis")}
      />
      <FaInstagram
        className={props.quartet ? styles.iconQuartet : styles.icon}
        onClick={() => handleLink("https://www.instagram.com/michel_meis")}
      />

      <FaYoutube
        className={props.quartet ? styles.iconQuartet : styles.icon}
        onClick={() =>
          handleLink("https://www.youtube.com/channel/UCdjZkLmz7oE7WIM51PSDMMQ")
        }
      />
    </div>
  );
}
export default SocialMedia;
