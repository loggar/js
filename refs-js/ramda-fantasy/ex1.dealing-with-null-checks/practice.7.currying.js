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

const R = require('ramda');
const prop = R.prop;
const path = R.path;
const curry = R.curry;
const Maybe = require('ramda-fantasy').Maybe;

//Imperative
const getUrl_i = (language) => allUrls[language]; //Simple, but error prone and impure (accesses global variable)

//Functional Programming

//Before currying:
const getUrl_fp = (allUrls, language) => {
	return Maybe(allUrls[language]);
}

//After currying:
const getUrl = R.curry(function (allUrls, language) {//curry to convert this to a single arg func
	return Maybe(allUrls[language]);
});

const maybeGetUrl = getUrl(indexURLs) //Store global value in the 'curried' function.

//From this point, maybeGetUrl needs only one argument(language). So we can now chain this like:
//Maybe(joeUser).chain(maybeGetUrl).bla.bla
