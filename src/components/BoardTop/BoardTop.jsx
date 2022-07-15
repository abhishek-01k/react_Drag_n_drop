import React from "react";
import styles from "./BoardTop.module.css";
import { AiOutlineStar } from "react-icons/ai";
import earth from "../../assets/logo/earth.svg";

const BoardTop = () => {
  return (
    <div className={styles.boardTopContainer}>
      <h1 className={styles.boardTitle}>Kanban Board</h1>
      <div className={styles.star}>
        <AiOutlineStar />
      </div>
      <div className={styles.divider}></div>
      <button className={styles.publicBtn}>
        <img src={earth} className={styles.earthImg} alt='earth'/>
        <span>Public</span>
      </button>
      <div className={styles.divider}></div>
      <span className='Avatar'>AH</span>
    </div>
  );
};

export default BoardTop;
