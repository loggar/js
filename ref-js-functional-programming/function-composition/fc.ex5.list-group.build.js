'use strict';

var _fcEx4TagAttrModule = require('./fc.ex4.tag-attr.module.build');

var _fcEx4TagAttrModule2 = _interopRequireDefault(_fcEx4TagAttrModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var listGroup = (0, _fcEx4TagAttrModule2.default)({ tag: 'ul', attr: { class: 'list-group' } });
var listGroupItem = (0, _fcEx4TagAttrModule2.default)({ tag: 'li', attr: { class: 'list-group-item' } });
var listGroupItems = function listGroupItems(items) {
	return items.map(listGroupItem).join('');
};

var r1 = listGroup();
console.log(r1);
// <ul class="list-group"></ul>

var r2 = listGroupItem('Cras justo');
console.log(r2);
// <li class="list-group-item">Cras justo</li>

var r3 = listGroupItems(['Cras justo', 'Dapibus ac']);
console.log(r3);
// <li class='list-group-item'>Cras justo</li>
// <li class='list-group-item'>Dapibus ac</li>

var r4 = listGroup(listGroupItems(['Cras justo', 'Dapibus ac']));
console.log(r4);
// <ul class='list-group'>
//   <li class='list-group-item'>Cras justo</li>
//   <li class='list-group-item'>Dapibus ac</li>
// </ul>
