/*
The catch callback is executed when the promise is rejected:
*/

new Promise(function(resolve, reject) {
	// A mock async action using setTimeout
	setTimeout(function() { reject('Done!'); }, 3000);
})
.then(function(e) { console.log('done', e); })
.catch(function(e) { console.log('catch: ', e); });

// From the console:
// 'catch: Done!'


/*
What you provide to the reject method is up to you.
A frequent pattern is sending an Error to the catch:
*/