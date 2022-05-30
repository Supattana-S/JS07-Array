let names = ["Jack", "John", "Bill", "John", "Rick", "Bill", "John"];

let result = {};

const nameCount = names.map((el) => {
  if (isNaN(result[el])) {
    return (result[el] = 1);
  }
  return (result[el] = +result[el] + 1);
});

console.log(result);
console.log(nameCount);
