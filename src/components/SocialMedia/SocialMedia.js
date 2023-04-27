import React from "react";
import styles from "./SocialMedia.module.css";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { openInNewTab } from "../OpenInNewTab";

function SocialMedia(props) {
  return (
    <div className={props.quartet ? styles.containerQuartet : styles.container}>
      <FaFacebook
        className={props.quartet ? styles.iconQuartet : styles.icon}
        onClick={() =>
          openInNewTab("https://www.facebook.com/michelmeismusic", "Facebook")
        }
      />
      <FaInstagram
        className={props.quartet ? styles.iconQuartet : styles.icon}
        onClick={() =>
          openInNewTab("https://www.instagram.com/michel_meis", "Instagram")
        }
      />

      <FaYoutube
        className={props.quartet ? styles.iconQuartet : styles.icon}
        onClick={() =>
          openInNewTab("https://www.youtube.com/@MichelMeisMusic", "Youtube")
        }
      />
    </div>
  );
}
export default SocialMedia;
