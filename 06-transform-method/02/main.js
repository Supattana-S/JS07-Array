const toCamelCase = (word) => {
  let splittedWord = word.split("-");
  console.log(splittedWord);
  let capitalizedWord = splittedWord.map((el, idx) => {
    if (idx > 0) {
      return el[0].toUpperCase() + el.slice(1);
    }
    return el;
  });
  return capitalizedWord.join("");
};

console.log(toCamelCase("background-color"));
