let arr = ["React", "Vue", "Angular"];

const copySorted = (arr) => {
  let result = arr.slice(0, 3);
  return result.sort();
};

let sorted = copySorted(arr);

console.log(sorted); // Angular, React, Vue
console.log(arr); // React, Vue, Angular (no changes)
