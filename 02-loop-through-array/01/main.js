const numbers = []; // can't put inside loop becuase if in the loop, it'll reset array every loop
let sum = 0;

while (1) {
  let inputNum = prompt("Enter Number");
  if (isNaN(inputNum) || inputNum === null || inputNum.trim() === "") {
    break;
  } else {
    numbers[numbers.length] = +inputNum;
    sum += +inputNum;
  }
}

console.log(numbers);

//or
// let sum = 0;
// for (let el of numbers) {
//   sum += el;
// }
