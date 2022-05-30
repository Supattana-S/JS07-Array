let names = ["Jack", "John", "Bill", "John", "Rick", "Bill", "John"];

// let result = {};

// const nameCount = names.map((el) => {
//   if (result[el] === undefined) {
//     return (result[el] = 1);
//   }
//   return (result[el] = +result[el] + 1);
// });

let nameCount = names.reduce((acc, el) => {
  if (acc[el] === undefined) {
    acc[el] = 1;
    return acc;
  }
  acc[el] += 1;
  return acc;
}, {});

// console.log(result);
console.log(nameCount);
