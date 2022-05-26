const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

// const updateTask = (id, newName) => {
//   const filterTask = tasks.filter((task) => {
//     if (task.id === id) {
//       task.name = newName;
//     }
//   });
// };

// updateTask(2, "Travelling");
// console.log(tasks);

// Solution;
function updateTask(id, newName) {
  const idx = tasks.findIndex((task) => task.id === id);
  if (idx !== -1) {
    // if .findindex cannot find, it'll return -1
    tasks[idx].name = newName;
  } else {
    alert("Task with this id is not found.");
  }
}

updateTask(2, "Travelling");
console.log(tasks);
