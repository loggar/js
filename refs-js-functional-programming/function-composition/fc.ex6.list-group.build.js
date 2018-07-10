'use strict';

var _fcEx4TagAttrModule = require('./fc.ex4.tag-attr.module.build');

var _fcEx4TagAttrModule2 = _interopRequireDefault(_fcEx4TagAttrModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
If we look at the structure of the list-group html we can see that there is one outer element that contains multiple children. Since it will always be created this way, it seems a little verbose to call listGroup(listGroupItems([‘Cras justo’, ‘Dapibus ac’])) to render the list every time.
I should just be able to call listGroup([‘Cras justo’, ‘Dapibus ac’]). The function should know what I want to do.
To do this I’ll start by renaming listGroup to listGroupTag. That way I can create a new listGroup function that will encapsulate the call to listGroupTag(listGroupItems([])).
*/

var listGroupTag = (0, _fcEx4TagAttrModule2.default)({ tag: 'ul', attr: { class: 'list-group' } });

var listGroupItem = (0, _fcEx4TagAttrModule2.default)({ tag: 'li', attr: { class: 'list-group-item' } });

var listGroupItems = function listGroupItems(items) {
	return items.map(listGroupItem).join('');
};

var listGroup = function listGroup(items) {
	return listGroupTag(listGroupItems(items));
};

var r5 = listGroup(['Cras justo', 'Dapibus ac']);
console.log(r5);
// <ul class="list-group"><li class="list-group-item">Cras justo</li><li class="list-group-item">Dapibus ac</li></ul>
