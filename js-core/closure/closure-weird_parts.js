/*
for (var i = 1; i <= 5; i++) {
	setTimeout(function timer() {
		console.log(i);
	}, i * 1000);
}

All we’re doing here is looping from 1 do 5 and setting a timeout to print the current number after a certain amount of time. Common sense says that this code will output 1, 2, 3, 4, 5, right?

To our surprise the above code logs the number 6 five consecutive times in the console. If you do this loop without the setTimeout you won’t be having any issues, because the log will be executed immediately. But apparently queueing up this operation in time is what causes the flaw.

We expect that every setTimeout call will receive it’s own copy of the i variable, but what happens is that it accesses it from it’s parent’s scope. And because they are queued the first log will happen 1 second after it was queued. When those 1000 milliseconds pass the loop has long finished and the i variable rests with the value of 6 assigned to it.

We understand the problem but how do we fix it? setTimeout will look for the i variable in the global scope, which leads to it not printing the number we want. We can manipulate that by wrapping the setTimeout in a function and passing the variable that we want to log in it. This way the setTimeout function will access it from it’s parent’s scope instead of the global one.
*/

for (var i = 1; i <= 5; i++) {
	(function (index) {
		setTimeout(function timer() {
			console.log(index);
		}, index * 1000);
	})(i)
}

/*
We are using an IIFE (Immediately Invoked Function Expression) and pass the number to log to it. An IIFE is a function that we call immediately after defining it and are often used in situations such as this — when we want to create a scope. This way each function will be called with it’s own copy of the variable, meaning that when the setTimeout runs it will access the proper number. So using the example above we will get the result of 1, 2, 3, 4 and 5 that we are looking for.
*/
