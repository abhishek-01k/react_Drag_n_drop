import React from "react";
import Board from "../../components/Board/Board";
import BoardTop from "../../components/BoardTop/BoardTop";
import styles from './BoardPage.module.css';

const BoardPage = () => {
  return (
    <div className={styles.bodyContainer}>
      <BoardTop />
      <Board />
    </div>
  );
};

export default BoardPage;
