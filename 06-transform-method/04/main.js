const arr = [-3, 2, 0, -7, 4, 6];

const arrPower = arr.map((el) => el ** 2);
console.log(arrPower);

const result = arrPower.sort((a, b) => a - b);
console.log(result);
