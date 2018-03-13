'use strict';

var _Array$prototype = Array.prototype,
    map = _Array$prototype.map,
    filter = _Array$prototype.filter;

var todoItems = document.querySelectorAll('ul.my-list > li');

var completedItems = filter.call(todoItems, function (item) {
  return item.dataset.completed;
});
var titles = map.call(todoItems, function (item) {
  return item.textContent;
});
