import React, { useState } from "react";
import styles from "./Task.module.css";
import List from "./List";
import { v4 as uuidv4 } from "uuid";

const AddContainer = ({ data, setData }) => {
  const getListItems = JSON.parse(localStorage.getItem("theList"));

  const [active, setActive] = useState(false);
  const [listName, setListName] = useState("");

  console.log(listName);

  const handleAddList = () => {
    const newList = {
      id: uuidv4(),
      title: listName,
      tasks: [],
    };
    getListItems.push(newList);
    localStorage.setItem("theList", JSON.stringify(getListItems));
    setData(getListItems);
    setActive(false);
  };

  console.log("Data", data);

  return (
    <>
      {active ? (
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Enter list title"
            onChange={(e) => setListName(e.target.value)}
          />
          <div className={styles.addListDiv}>
            <button className={styles.addBtn} onClick={handleAddList}>
              Add List
            </button>
            <span onClick={() => setActive(false)}>X</span>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <div
            onClick={() => setActive(true)}
            className={styles.addAnotherListBtn}
          >
            <span className={styles.plusSign}>+</span>
            Add another list
          </div>
        </div>
      )}
    </>
  );
};

export default AddContainer;
