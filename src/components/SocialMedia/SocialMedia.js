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
          props.quartet
            ? openInNewTab(
                "https://www.facebook.com/michelmeis4tet",
                "Facebook 4tet"
              )
            : openInNewTab(
                "https://www.facebook.com/michel.meis",
                "Facebook Michel Meis"
              )
        }
      />
      <FaInstagram
        className={props.quartet ? styles.iconQuartet : styles.icon}
        onClick={() =>
          props.quartet
            ? openInNewTab(
                "https://www.instagram.com/michelmeis4tet",
                "Instagram 4tet"
              )
            : openInNewTab(
                "https://www.instagram.com/michel_meis",
                "Instagram Michel Meis"
              )
        }
      />

      {props.quartet ? (
        <FaYoutube
          className={styles.iconQuartet}
          onClick={() =>
            openInNewTab(
              "https://www.youtube.com/channel/UCdjZkLmz7oE7WIM51PSDMMQ",
              "Youtube 4tet"
            )
          }
        />
      ) : null}
    </div>
  );
}
export default SocialMedia;
