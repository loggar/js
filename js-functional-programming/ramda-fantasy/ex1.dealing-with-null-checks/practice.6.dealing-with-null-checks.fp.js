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

//Functional Programming:
//(Little hard to understand at first but is more robust and bug free)
//FP techniques used: Functors, "Maybe Monad" and "Currying"
const R = require('ramda');
const prop = R.prop;
const path = R.path;
const curry = R.curry;
const Maybe = require('ramda-fantasy').Maybe;

const getURLForUser = (user) => {
	return Maybe(user)//wrap user in a Maybe object 
		.map(path(['prefs', 'languages', 'primary'])) //use Ramda's to grab primary language
		.chain(maybeGetUrl); //pass language to maybeGetUrl &  get url or null Monad
}

const maybeGetUrl = R.curry(function (allUrls, language) {//curry to convert this to a single arg func
	return Maybe(allUrls[language]);//return Monad(url | null)
})(indexURLs);//pass indexURLs instead of accessing globally


function boot(user, defaultURL) {
	showIndexPage(getURLForUser(user).getOrElse(defaultURL));
}

// call
boot(joeUser, 'http://site.com/en'); //'http://site.com/sp'