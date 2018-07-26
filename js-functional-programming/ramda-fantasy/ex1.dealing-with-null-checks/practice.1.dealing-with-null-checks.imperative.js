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

//Imperative:
//Too many if-else and null checks; relying on global indexURLs; decided that "en" urls are default for any country
const getUrlForUser = (user) => {
	if (user == null) { //not logged in
		return indexURLs['en']; //return default page
	}
	if (user.prefs.languages.primary && user.prefs.languages.primary != 'undefined') {
		if (indexURLs[user.prefs.languages.primary]) {//if translation exists,
			return indexURLs[user.prefs.languages.primary];
		} else {
			return indexURLs['en'];
		}
	}
}

//call
showIndexPage(getUrlForUser(joeUser));