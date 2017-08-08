// Account for the existence of more than one global
// instances of jQuery in the document, cater for testing
// .noConflict()

var jQuery = this.jQuery || "jQuery",
    $ = this.$ || "$",
    originaljQuery = jQuery,
    original$ = $;

define(["jquery"], function ($) {
    $(".items").css("background", "green");
    return function () { };
});