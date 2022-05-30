let alphabets = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];

alphabets.sort();
console.log(alphabets);

const result = alphabets.reduce((acc, el) => {
  if (acc.includes(el)) {
    return acc;
  }
  acc.push(el);
  return acc;
}, []);

console.log(result);
// let str = "";
// let result = alphabets.map((el, i, arr) => {
//   if (!str.includes(el)) {
//     str += el;
//   }
// });

// console.log(str.split(""));

// const result = alphabets.reduce((acc, el) => {
//   if (acc.includes(el)) {
//     return acc;
//   }
//   acc.push(el);
//   return acc;
// }, []);
// console.log(result);
