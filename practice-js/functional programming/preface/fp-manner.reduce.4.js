/*
Let’s do something a bit more useful with our reduce() method. Let’s calculate the results of a vote for the best ice cream flavor
*/

const flavours = [
	"strawberry",
	"strawberry",
	"kiwi",
	"kiwi",
	"kiwi",
	"strawberry",
	"mango",
	"kiwi",
	"banana"
];
const votes = {};
const reducer = (votes, vote) => {
	votes[vote] = !votes[vote] ? (votes[vote] = 1) : votes[vote] + 1;
	return votes;
};
const outcome = flavours.reduce(reducer, votes);
// Output
console.log("Strawberry: ", outcome.strawberry);
console.log("Kiwi: ", outcome.kiwi);
console.log("Mango: ", outcome.mango);
console.log("Banana: ", outcome.banana);
