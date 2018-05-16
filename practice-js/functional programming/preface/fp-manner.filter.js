const iceCreams = [
	{ flavor: 'pineapple', color: 'white' },
	{ flavor: 'strawberry', color: 'red' },
	{ flavor: 'watermelon', color: 'red' },
	{ flavor: 'kiwi', color: 'green' },
	{ flavor: 'mango', color: 'yellow' },
	{ flavor: 'pear', color: 'green' }
];

const getRed = icecream => icecream.color === 'red';
const favoriteFlavors = iceCreams
	.filter(getRed);
console.log(favoriteFlavors);
