let str = "I live in Thailand";

let strLowerCase = str.toLowerCase();

const arrStr = strLowerCase.split("");
const filteresArr = arrStr.filter((el) => el !== " ");

console.log(arrStr);
console.log(filteresArr);

let result = {};

const strCount = filteresArr.map((el) => {
  if (isNaN(result[el])) {
    return (result[el] = 1);
  }

  return (result[el] = +result[el] + 1);
});

console.log(result);
