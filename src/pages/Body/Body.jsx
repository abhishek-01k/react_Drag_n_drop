import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./Body.module.css";
import classNames from "classnames";
import Header from "../../components/Header/Header";
import BoardPage from "../BoardPage/BoardPage";

const Body = () => {
  return (
    <div className={styles.bodyContainer}>
      <div className=" min-h-screen">
        <Sidebar />
      </div>
      <div className={classNames(styles.bodyDiv)}>
        <Header />
        <BoardPage/>
      </div>
    </div>
  );
};

export default Body;
