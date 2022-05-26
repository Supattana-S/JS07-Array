const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

const deleteTask = (id) => {
  tasks.filter((el, i) => {
    if (el.id === id) {
      tasks.splice(id - 1, 1);
    }
  });
};

deleteTask(2);
console.log(tasks);
