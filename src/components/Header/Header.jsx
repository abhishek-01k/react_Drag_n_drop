import React from "react";
import styles from "./Header.module.css";
import world from "../../assets/logo/world.svg";

const Header = () => {
  return (
    <div className={styles.headContainer}>
      <div className={styles.headDiv}>
        <img src={world} alt="world" className={styles.worldImg} />
        <span>
          This board is set to public. Board admins can change its visibility
          setting at any time.
        </span>
        <a>Learn more here</a>
      </div>
      <span className={styles.X}>X</span>
    </div>
  );
};

export default Header;
