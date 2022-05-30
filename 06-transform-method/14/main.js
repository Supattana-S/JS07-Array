const products = [
  { id: 1, name: "Crystal" },
  { id: 4, name: "Namthip" },
  { id: 5, name: "Nestle" },
];

const result = products.reduce((acc, el) => {
  acc[el.id] = { name: el.name };
  return acc;
}, {});

console.log(result);
