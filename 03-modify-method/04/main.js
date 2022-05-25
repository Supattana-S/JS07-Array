const first = (arr, n) => {
  if (n === 1 || n === undefined) {
    return arr[0];
  } else if (n > 1) {
    let resultArr = [];
    for (i = 0; i < n; i++) {
      resultArr[i] = arr[i];
    }
    return resultArr;
  } else {
    return "Valid Value";
  }
};

console.log(first([7, 9, 0, -2])); // 7
console.log(first([], 3)); // []
console.log(first([7, 9, 0, -2], 3)); // [7, 9 ,0]
