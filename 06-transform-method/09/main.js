let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

arr.sort((a, b) => a - b);
let result = `Min: ${arr[0]}\nMax: ${arr[arr.length - 1]}`;
console.log(result);
