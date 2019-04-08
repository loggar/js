var marks = { physics: 98, maths: 95, chemistry: 91 };

var highScore = 0;
for (i of Object.keys(marks)) {
	if (marks[i] > highScore)
		highScore = marks[i];
}

console.log(highScore);