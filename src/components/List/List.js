import { v4 as uuidv4 } from "uuid";

const List = {
  list: [
    {
      id: uuidv4(),
      title: "To Do",
      tasks: [
        {
          id: uuidv4(),
          title: "Helpdesk Call EE999",
        },
        {
          id: uuidv4(),
          title: "Learn CSS",
        },
        {
          id: uuidv4(),
          title: "Learn ReactJs",
        },
        {
          id: uuidv4(),
          title: "Learn HTML",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Development",
      tasks: [
        {
          id: uuidv4(),
          title: "Learning",
        },
        {
          id: uuidv4(),
          title: "Cooking",
        },
        {
          id: uuidv4(),
          title: "Reading ReactJs",
        },
        {
          id: uuidv4(),
          title: "Cramp HTML",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Testing",
      tasks: [
        {
          id: uuidv4(),
          title: "Learning",
        },
        {
          id: uuidv4(),
          title: "Cooking",
        },
        {
          id: uuidv4(),
          title: "Reading ReactJs",
        },
        {
          id: uuidv4(),
          title: "Cramp HTML",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Done",
      tasks: [
        {
          id: uuidv4(),
          title: "Learning",
        },
        {
          id: uuidv4(),
          title: "Cooking",
        },
        {
          id: uuidv4(),
          title: "Reading ReactJs",
        },
        {
          id: uuidv4(),
          title: "Cramp HTML",
        },
      ],
    },
  ],

  getList: function () {
    return JSON.parse(localStorage.getItem("theList")) || this.list;
  },

  saveList: (list) => {
    localStorage.setItem("theList", JSON.stringify(list));
  },

};

export default List;
