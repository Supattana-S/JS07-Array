const alphabets = ["a", "b", "a", "c", "a", "d"];

const resultArr = [];

const result = alphabets.filter((element, index) => {
  if (alphabets[index] === "a") {
    resultArr[index] = index;
  }
  if (resultArr[index] === "") {
    resultArr.splice(index, 1);
  }
});

console.log(resultArr);
