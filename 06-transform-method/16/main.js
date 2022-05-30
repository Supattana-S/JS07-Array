const persons = [
  { name: "John", sex: "M" },
  { name: "Jody", sex: "M" },
  { name: "Susan", sex: "F" },
  { name: "Kate", sex: "F" },
  { name: "Sid", sex: "M" },
];

const result = persons.reduce((acc, el) => {
  if (acc[el.sex] === undefined) {
    acc[el.sex] = [];
    acc[el.sex].push(el.name);
  }
  acc[el.sex].push(el.name);
  return acc;
}, {});

console.log(result);
