import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import styles from "./Board.module.css";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import List from "../List/List";
import AddContainer from "../List/AddContainer";
import AddTask from "../List/AddTask";
import { useEffect } from "react";

const Board = () => {
  const list = List.getList();
  const [data, setData] = useState(list);
  const getListItems = JSON.parse(localStorage.getItem("theList"));

  console.log("List", list);

  console.log(
    "List from local storage",
    JSON.parse(localStorage.getItem("theList"))
  );

  useEffect(()=>{
    setData(data);
  },[data])

  const onDragEnd = (result) => {
    console.log(result);
    if (!result.destination) return;

    console.log("List", data);

    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const destinationColIndex = data.findIndex(
        (e) => e.id === destination.droppableId
      );

      const sourceCol = data[sourceColIndex];
      const destinationCol = data[destinationColIndex];

      const sourceTask = [...sourceCol.tasks];
      const destinationTask = [...destinationCol.tasks];

      const [removed] = sourceTask.splice(source.index, 1);
      destinationTask.splice(destination.index, 0, removed);

      data[sourceColIndex].tasks = sourceTask;
      data[destinationColIndex].tasks = destinationTask;

      setData(data);
    } else {
      const DataIndex = data.findIndex((e) => e.id === source.droppableId);

      console.log("Source Col Index", DataIndex);
      const srcI = source.index;
      const desI = destination.index;

      const dataCol = data[DataIndex].tasks;

      console.log("Data COlumn konsa h jaha move ho rha h ", dataCol);

      dataCol.splice(desI, 0, dataCol.splice(srcI, 1)[0]);

      console.log("Data COlumn after splice", dataCol);
    }

    console.log("LIst after all changes", list);

    List.saveList(list);
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={styles.boardContainer}>
          {data.map((section) => (
            <Droppable key={section.id} droppableId={section.id}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  className={styles.droppableContainer}
                  ref={provided.innerRef}
                >
                  <div className="flex justify-between">
                    <div className={styles.title}>{section.title}</div>
                    <div className={styles.horizontalDots}>
                      <BiDotsHorizontalRounded />
                    </div>
                  </div>
                  <div
                    onClick={(e) => {
                      console.log("Id", section.id);
                    }}
                    className=" "
                  >
                    {section.tasks.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {/* {task.title} */}
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              ...provided.draggableProps.style,
                              opacity: snapshot.isDragging ? "0.5" : "1",
                              height: "50px",
                              margin: 4,
                            }}
                          >
                            <div className={styles.taskNameContainer}>
                              <div
                                onClick={() =>
                                  console.log("Item moving ID", task.id)
                                }
                                className={styles.taskName}
                              >
                                {task.title}
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    <div
                      onClick={() => {
                        console.log(section.title);
                        console.log(section.id);
                      }}
                    >
                      <AddTask  setData={setData} title={section.title} id={section.id} data={data}/>
                    </div>
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
         <AddContainer data={data} setData={setData} />
        </div>
      </DragDropContext>
    </div>
  );
};

export default Board;
