const numbers = [];

while (1) {
  let inputNum = prompt("Enter Number");
  if (isNaN(inputNum) || inputNum === null || inputNum.trim() === "") {
    break;
  } else {
    numbers[numbers.length] = inputNum;
  }
}

console.log(numbers);
