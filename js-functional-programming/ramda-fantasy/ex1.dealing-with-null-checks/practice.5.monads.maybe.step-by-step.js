/*
1. If there any object that might be null or have null properties, create a Monad object out of it.
2. Use some libraries like ramdajs, that are “Maybe-aware” to access value from within the Monad and work on it.
3. Provide a default value if the actual value happens to be null (i.e handle Null errors upfront).
*/

const R = require('ramda');
const prop = R.prop;
const path = R.path;
const curry = R.curry;
const Maybe = require('ramda-fantasy').Maybe;
const Nothing = require('ramda-fantasy').Nothing;

//Global indexURLs map for different languages
let indexURLs = {
	'en': 'http://mysite.com/en',  //English
	'sp': 'http://mysite.com/sp', //Spanish
	'jp': 'http://mysite.com/jp'   //Japanese
}
//User object
let joeUser = {
	name: 'joe',
	email: 'joe@example.com',
	prefs: {
		languages: {
			primary: 'sp',
			secondary: 'en'
		}
	}
};
//apply url to window.location
const showIndexPage = (url) => { console.log("window.location = " + url); };

//Step 1. Instead of..
var imp = (user) => {
	if (user == null) { //not logged in
		return indexURLs['en']; //return default page
	}
}

//Use:
var fp = (user) => {
	return Maybe(user) //Returns Maybe({userObj}) or Maybe(null). i.e. data wrapped INSIDE "Maybe"
}

console.log(imp(joeUser));
console.log(fp(joeUser));


//Step 2. Instead of..
const imp2 = (user) => {
	if (user.prefs.languages.primary && user.prefs.languages.primary != 'undefined') {
		if (indexURLs[user.prefs.languages.primary]) {//if translation exists,
			return indexURLs[user.prefs.languages.primary];
		} else {
			return indexURLs['en'];
		}
	}
}

//Use:
//a library that knows how to deal with data inside Maybe like Ramda's map.path:
const fp2 = (user) => {
	return Maybe(user)//wrap user in a Maybe object 
		.map(path(['prefs', 'languages', 'primary'])); //use Ramda's to grab primary language
}

console.log(imp2(joeUser));
console.log(fp2(joeUser));


//Step 3. Instead of..
const imp3 = () => {
	return indexURLs['en']; //hardcoded default values
}


//Use:
//all Maybe libs provide 'orElse' or 'getOrElse' method that'll return either actual data or return "default value"
const fp3 = (user) => {
	return Maybe(null).getOrElse('http://site.com/en');
}

console.log(imp3());
console.log(fp3());
