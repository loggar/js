const scoresEach = [2, 4, 8, 16, 32];
const scoresMap = [2, 4, 8, 16, 32];
const square = (num) => num * num;

let newScores = [];
const resultWithEach = scoresEach.forEach((score) => {
  const newScore = square(score);
  newScores.push(newScore);
});
const resultWithMap = scoresMap.map(square);

console.log(resultWithEach); // logs undefined
console.log(resultWithMap); // logs [4, 16, 64, 256, 1024]

console.log(newScores); // logs [4, 16, 64, 256, 1024]
