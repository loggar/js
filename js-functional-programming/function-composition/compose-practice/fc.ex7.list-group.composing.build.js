'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.listGroupItems = exports.listGroupTag = exports.listGroup = undefined;

var _composePipeModule = require('../compose-pipe/compose-pipe.module.build');

var _fcEx4TagAttrModule = require('./fc.ex4.tag-attr.module.build');

var _fcEx4TagAttrModule2 = _interopRequireDefault(_fcEx4TagAttrModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Take a look at the code below. Any time you recognize this pattern, the functions can be easily composed.

const listGroup = items => listGroupTag(listGroupItems(items))

When composed together, the result will look similar to the original, listGroupTag on the left, followed by listGroupItems, and then items on the right.

const listGroup = items => compose(listGroupTag, listGroupItems)(items)

When functions are composed together, they are read from right to left just like regular functions.
Because compose returns a function that takes a list and our listGroup function also takes a list, we can simplify listGroup to equal our composition and remove list.

const compose = (...functions) => data => functions.reduceRight((value, func) => func(value), data)
const listGroup = compose(listGroupTag, listGroupItems)
*/

var listGroupTag = (0, _fcEx4TagAttrModule2.default)({ tag: 'ul', attr: { class: 'list-group' } });
var listGroupItem = (0, _fcEx4TagAttrModule2.default)({ tag: 'li', attr: { class: 'list-group-item' } });
var listGroupItems = function listGroupItems(items) {
	return items.map(listGroupItem).join('');
};

var listGroup = (0, _composePipeModule.compose)(listGroupTag, listGroupItems);
// const r5 = listGroup(['Cras justo', 'Dapibus ac'])
// console.log(r5)

exports.listGroup = listGroup;
exports.listGroupTag = listGroupTag;
exports.listGroupItems = listGroupItems;
