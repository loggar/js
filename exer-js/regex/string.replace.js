var show = console.log;
var print = console.log;

print("Borobudur".replace(/[ou]/g, "a"));


var names = "Picasso, Pablo\nGauguin, Paul\nVan Gogh, Vincent";
print(names.replace(/([\w ]+), ([\w ]+)/g, "$2 $1"));


function eatOne(match, amount, unit) {
	amount = Number(amount) - 1;
	if (amount == 1) {
		unit = unit.slice(0, unit.length - 1);
	}
	else if (amount == 0) {
		unit = unit + "s";
		amount = "no";
	}
	return amount + " " + unit;
}

var stock = "1 lemon, 2 cabbages, and 101 eggs";
stock = stock.replace(/(\d+) (\w+)/g, eatOne);

print(stock);




function escapeHTML(text) {
	var replacements = {
		"<": "&lt;", ">": "&gt;",
		"&": "&amp;", "\"": "&quot;"
	};
	return text.replace(/[<>&"]/g, function (character) {
		return replacements[character];
	});
}

print(escapeHTML("The 'pre-formatted' tag is written \"<pre>\"."));