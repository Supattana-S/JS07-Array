const nums = [7, 9, -5, -1, 0, 3];

const result = nums.find((el) => {
  if (el < 0) {
    return true;
  }
});
console.log(result);
