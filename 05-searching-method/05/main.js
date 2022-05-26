const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.find((el) => {
  if (el.name === "cherries") {
    return true;
  }
});

console.log(result);
