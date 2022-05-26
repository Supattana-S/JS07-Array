// const array = [9, 17, 23, 5];
// const result = array.filter((el) => {
//   if (el > 10) {
//     return true;
//   }
// });
// console.log(result);

// const array = [1, 2, 3, 4];
// const result = array.filter((el) => {
//   if (el % 2 === 1) {
//     return true;
//   }
// });
// console.log(result);

// const array = [1, "1", 2, {}];
// const result = array.filter((el) => {
//   if (typeof el === "number") {
//     return true;
//   }
// });
// console.log(result);

// const array = ["apple", "banana", "orange", "pineapple", "watermeon"];
// const result = array.filter((el) => {
//   if (el.length > 6) {
//     return true;
//   }
// });
// console.log(result);

// const array = [1, -3, 2, 8, -4, 5];
// const result = array.filter((el) => {
//   if (el > 0) {
//     return true;
//   }
// });
// console.log(result);

// const array = [1, 3, 4, 5, 6, 7, 8];
// const result = array.filter((el) => {
//   if (el % 3 === 0) {
//     return true;
//   }
// });
// console.log(result);

// const array = ["Elephant", "Ant", "Cat", "Eagle", "Zebra"];
// const result = array.filter((el) => {
//   if (el.startsWith("E")) {
//     return true;
//   }
// });
// console.log(result);

// const array = ["APPLE", "oRanGE", "PEACH", "PaPAYA"];
// const result = array.filter((el) => {
//   let arr = [];
//   for (i = 0; i < el.length; i++) {
//     if (el[i] !== el[i].toUpperCase()) {
//       arr[i] = el[i];
//     }
//   }
//   if (arr.length === 0) {
//     return true;
//   }
// });

// console.log(result);

// const array = ["Krabi", "Chonburi", "Buriram", "Saraburi", "Phrae"];
// const result = array.filter((el) => {
//   if (el.includes("Buri") || el.includes("buri")) {
//     return true;
//   }
// });

// console.log(result);

// const array = [
//   { name: "Ben", age: 14 },
//   { name: "Phil", age: 18 },
//   { name: "John", age: 32 },
//   { name: "Ann", age: 16 },
//   { name: "Paul", age: 24 },
// ];

// const result = array.filter((el) => {
//   if (el.age >= 18) {
//     return true;
//   }
// });

// console.log(result);

// const array = [
//   { id: 1, name: "Pepsi" },
//   { id: 2, name: "Mirinda" },
//   { id: 3, name: "Coke" },
//   { id: 4, name: "Fanta" },
//   { id: 5, name: "Sprite" },
// ];

// const result = array.filter((el) => {
//   if (el.id !== 4) {
//     return true;
//   }
// });

// console.log(result);

const array = [
  { name: "John", birth: "2001-07-31" },
  { name: "Jack", birth: "1990-06-24" },
  { name: "Jim", birth: "1984-12-13" },
  { name: "Jeff", birth: "1996-02-05" },
  { name: "Joe", birth: "2002-06-13" },
];

const result = array.filter((el) => {
  if (el.birth.includes("-06-")) {
    return true;
  }
});

console.log(result);
