const scores = [
  { score: 90, subject: "HTML", weight: 0.2 },
  { score: 95, subject: "CSS", weight: 0.3 },
  { score: 85, subject: "JavaScript", weight: 0.5 },
];

const resultScore = scores.reduce((acc, el) => {
  return Math.trunc(acc + (el.score + el.weight) / 3);
}, 0);

console.log(resultScore);
