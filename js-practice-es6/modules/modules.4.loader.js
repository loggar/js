// normal script loaded in browser via `<script>`,
// `import` is illegal here

Reflect.Loader.import("foo") // returns a promise for `"foo"`
	.then(function (foo) {
		foo.bar();
	});

Reflect.Loader.import("foo", { address: "/path/to/foo.js" })
	.then(function (foo) {
		// ..
	});