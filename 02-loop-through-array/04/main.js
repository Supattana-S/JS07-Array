const array = [29, 17, 13, 47, 23, 31];
let sum = 0;

const result = array.forEach((element) => {
  sum += element;
});

console.log(sum);
console.log(result);
