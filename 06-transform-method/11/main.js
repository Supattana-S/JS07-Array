let str = "I live in Thailand";

let strLowerCase = str.toLowerCase();

const arrStr = strLowerCase.split("");
const filteresArr = arrStr.filter((el) => el !== " ");

console.log(arrStr);
console.log(filteresArr);

let result = filteresArr.reduce((acc, el) => {
  if (acc[el] === undefined) {
    acc[el] = 1;
    return acc;
  }
  acc[el] += 1;
  return acc;
}, {});

console.log(result);

// let result = {};

// const strCount = filteresArr.map((el) => {
//   if (result[el] === undefined) {
//     return (result[el] = 1);
//   }

//   return (result[el] = +result[el] + 1);
// });

// console.log(result);
