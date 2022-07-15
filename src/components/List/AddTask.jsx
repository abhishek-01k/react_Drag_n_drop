import React, { useState } from "react";
import List from "./List";
import styles from "./Task.module.css";
import { v4 as uuidv4 } from "uuid";

const AddTask = ({ title, id, data, setData }) => {
  const getListItems = JSON.parse(localStorage.getItem("theList"));
  const [active, setActive] = useState(false);

  const [listName, setListName] = useState("");

  console.log(listName);
  console.log("Title", title);
  console.log("ID", id);

  const handleNewTask = () => {
    const index = getListItems.findIndex((e) => e.id === id);
    const tasks = getListItems[index].tasks;
    console.log("Tasks", tasks);

    const newTask = {
      id: uuidv4(),
      title: listName,
    };

    tasks.push(newTask);

    localStorage.setItem("theList", JSON.stringify(getListItems));
    setData(getListItems);
    setActive(false);
    console.log("Updated data", data);
    console.log("Updated Task", tasks);
  };

  return (
    <>
      {active ? (
        <div className={styles.inputTaskContainer}>
          <input
            type="text"
            placeholder="Enter list title"
            onChange={(e) => setListName(e.target.value)}
          />
          <div className={styles.addListDiv}>
            <button className={styles.addBtn} onClick={handleNewTask}>
              Add Task
            </button>
            <span onClick={() => setActive(false)}>X</span>
          </div>
        </div>
      ) : (
        <div onClick={() => setActive(true)} className={styles.taskContainer}>
          <div className={styles.addTaskBtn}>
            <span>+</span>
            Add New Task
          </div>
        </div>
      )}
    </>
  );
};

export default AddTask;
