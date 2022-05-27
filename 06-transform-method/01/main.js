// const array = [1, 2, 30, 400];
// const result = array.map(el => el+el)
// console.log(result)

// const array = [1, 2, 3, 4];
// const result = array.map(el => '' + el)
// console.log(result)

// const array = [1, "1", 2, {}];
// const result = array.map((el) => typeof el);
// console.log(result);

// const array = ["apple", "banana", "orange"];
// const result = array.map((el) => el.toUpperCase());
// console.log(result);

// const array = [1, 3, 4, 5, 6, 7, 8];
// const result = array.map((el) => {
//     if (el % 2 === 0) {
//         return 'even'
//     }
//     return 'odd'
// });
// console.log(result);

// const array = [1, -3, 2, 8, -4, 5];
// const result = array.map((el) => {
//   if (el < 0) {
//     return -1 * el;
//   }
//   return el;
// });
// console.log(result);

// const array = [100, 200.25, 300.84, 400.3];
// const result = array.map((el) => el.toFixed(2));
// console.log(result);

// const array = [0, 5, 10, 7, 6, 5, 0];
// const result = array.map((el, idx) => {
//   const month = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];
//   return month[el];
// });
// console.log(result);
// console.log(result === array);

// const array = [1, 16, 81, 256, 625, 1296];
// const result = array.map((el) => {
//   return Math.sqrt(Math.sqrt(el));
// });
// console.log(result);

// const array = [
//   { name: "apple", age: 14 },
//   { name: "banana", age: 18 },
//   { name: "watermelon", age: 32 },
// ];
// const result = array.map((el) => el.name);
// console.log(result);

// const array = [
//   { name: "apple", age: 14 },
//   { name: "banana", age: 18 },
//   { name: "watermelon", age: 32 },
// ];
// const result = array.map((el) => el.age);
// console.log(result);

// const array = [
//   { name: "apple", surname: "London" },
//   { name: "banana", surname: "Bangkok" },
//   { name: "watermelon", surname: "Singapore" },
// ];
// const result = array.map((el) => `${el.name} ${el.surname}`);
// console.log(result);

// const array = [
//   { name: "apple", birth: "2000-01-01" },
//   { name: "banana", birth: "1990-10-01" },
//   { name: "watermelon", birth: "1985-12-01" },
// ];
// const result = array.map((el) => {
//   return {
//     name: el.name,
//     birth: el.birth,
//     age: (el.age = 2021 - +el.birth.slice(0, 4)),
//   };
// });
// console.log(result);

const array = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
];
const result = array.map((el) => {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `<tr><td>${el.name}</td><td>${el.birth.slice(8)} ${
    month[+el.birth.slice(5, 7) - 1]
  } ${el.birth.slice(0, 4)}</td></tr>`;
});
console.log(result);
