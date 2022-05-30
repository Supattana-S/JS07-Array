let flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
];

let result = flattened
  .join()
  .split(",")
  .map((el) => +el);

console.log(result);
