var onChange = require('./object.onChange');

let j = {
	a: 1
};

// Upon change, save to server
let changeable = onChange(j, () => {
	console.log('request to save object : ', j);
});

// Make a change that would trigger changes
changeable.a = 2;

// save() is triggered!

// j.a === 2