import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Nutdev</div>
      <div className={styles.text}>
        Nut creative thoughts agency © All rights reserved
      </div>
    </div>
  );
};

export default Footer;
