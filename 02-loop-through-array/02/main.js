const squareArr = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i] ** 2;
  }

  return newArr;
};

const arr = [2, 3, 5, 7, 11];

console.log(squareArr(arr));
