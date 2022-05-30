let john = { name: "John", age: 27 };
let jo = { name: "Jo", age: 21 };
let jin = { name: "Jin", age: 25 };

let arr = [john, jo, jin];

const getAverageAge = (arr) => {
  let result = arr.reduce((acc, el) => {
    acc += el.age / arr.length;
    return acc;
  }, 0);
  return result;
};

console.log(getAverageAge(arr));
