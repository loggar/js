var marks = { physics: 98, maths: 95, chemistry: 91 };

var highScore = 0;
for (i of Object.keys(marks)) {
  if (marks[i] > highScore) highScore = marks[i];
}

console.log(highScore);

var params = { physics: 98, maths: 95, chemistry: 91 };

for (var key in params) {
  console.log(key, params[key]);
}

for (key of Object.keys(params)) {
  console.log(key, params[key]);
}
