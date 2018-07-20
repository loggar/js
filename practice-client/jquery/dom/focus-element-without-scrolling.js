$.fn.focusWithoutScrolling = function () {
	var x = window.scrollX, y = window.scrollY;
	this.focus();
	window.scrollTo(x, y);
};