const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

// const deleteTask = (id) => {
//   tasks.filter((el, i) => {
//     if (el.id === id) {
//       tasks.splice(id - 1, 1);
//     }
//   });
// };

const deleteTask = (id) => {
  //#1
  // return tasks.filter(task => task.id !== id)

  //#2
  const newTasks = tasks.slice(); // clones tasks to newTasks
  const idx = tasks.findIndex((el) => el.id === id);
  if (idx !== -1) {
    // means if find the match index
    newTasks.splice(idx, 1);
  }
};

deleteTask(2);
console.log(tasks);
