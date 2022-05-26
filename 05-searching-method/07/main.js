const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

const updateTask = (id, newName) => {
  tasks.filter((el, i) => {
    if (el.id === id) {
      el.name = newName;
    }
  });
};

updateTask(2, "Travelling");
console.log(tasks);
