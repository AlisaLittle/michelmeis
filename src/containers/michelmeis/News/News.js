import React from "react";
import styles from "./News.module.css";
import NewsPhoto from "../../../pictures/Meis/News.jpg";

function News() {
  return (
    <div className={styles.container}>
      {<div className={styles.header}>NEWS</div>}{" "}
      {/*       <img className={styles.image} src={NewsPhoto} /> */}
      <div className={styles.space}></div>
      <div>hier stehen dann die News</div>
    </div>
  );
}

export default News;
