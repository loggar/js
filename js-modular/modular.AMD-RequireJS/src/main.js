requirejs.config({
	baseUrl: './src'
});

require(['math'], function (Math) {
	console.log(Math.sum(1, 2));
});