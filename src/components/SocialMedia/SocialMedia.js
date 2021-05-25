import React, { useEffect, useState } from "react";
import styles from "./SocialMedia.module.css";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className={styles.container}>
      <FaFacebook className={styles.icon} />
      <FaInstagram className={styles.icon} />

      <FaYoutube className={styles.icon} />
    </div>
  );
}
export default SocialMedia;
