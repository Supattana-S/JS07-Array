// const filterRange = (arr, a, b) => {
//   const indexA = arr.findIndex((el, i) => {
//     if (el === a) {
//       return true;
//     }
//   });
//   const indexB = arr.findIndex((el, i) => {
//     if (el === b) {
//       return true;
//     }
//   });

//   return arr.slice(indexA + 1, indexB);
// };

const filterRange = (arr, a, b) => {
  return arr.filter((el) => el >= a && el <= b);
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(filterRange(nums, 12, 20));
