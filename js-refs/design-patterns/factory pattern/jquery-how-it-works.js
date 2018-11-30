(function (context) {
	var jQuery = function (selector, context) {
		return new jQuery.fn.init(selector, context, rootjQuery);
	};
	//$.fn = jQuery.fn is a shorthand for defining "jQuery plugins".
	jQuery.fn = jQuery.prototype = {
		constructor: jQuery,
		init: function ( /* ..parameters.. */) {
			//.... sets default properties...
		}
		//....other methods, such as size, get, etc...
		//.... other properties, such as selector, length, etc...
	};
	jQuery.fn.removeClass = function () { // (Actually via jQuery.fn.extend)
		// ... method logic...
	};  //...lots of other stuff...

	context.$ = context.jQuery = jQuery; //Publish method
})(this);

console.log(this.$);

/*
The advantage of the prototype method is that it's very easy to chain methods and properties. For example:

$("body").find("div:first").addClass("foo");

A method to implement this feature could be:

$.fn.find = function(selector) {
    ...
    return $(...);
};
*/