let str = "31 45 12 67 34 86 23 37 19 41";

const arrStr = str.split(" ");
console.log(arrStr);

const result = arrStr.reduce((sum, el) => {
  if (+el < 40) {
    sum += +el;
  }
  return sum;
}, 0);

console.log(result);
