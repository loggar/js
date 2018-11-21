'use strict';

var _composePipeModule = require('../compose-pipe/compose-pipe.module.build');

var _fcEx4TagAttrModule = require('./fc.ex4.tag-attr.module.build');

var _fcEx4TagAttrModule2 = _interopRequireDefault(_fcEx4TagAttrModule);

var _fcEx7ListGroupComposing = require('./fc.ex7.list-group.composing.build');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var panelTag = (0, _fcEx4TagAttrModule2.default)({ tag: 'div', attr: { class: 'panel panel-default' } });
var panelBody = (0, _fcEx4TagAttrModule2.default)({ tag: 'div', attr: { class: 'panel-body' } });
var basicPanel = (0, _composePipeModule.compose)(panelTag, panelBody);

var r1 = basicPanel('panel text');
console.log(r1);
// <div class="panel panel-default"><div class="panel-body">panel text</div></div>

/*
Now if we want to create an element that is a list-group inside of a panel, all we have to do is this:
*/

var listGroupPanel = (0, _composePipeModule.compose)(basicPanel, _fcEx7ListGroupComposing.listGroup);
var r2 = listGroupPanel(['list text 1', 'list text 2']);
console.log(r2);
// <div class="panel panel-default"><div class="panel-body"><ul class="list-group"><li class="list-group-item">list text 1</li><li class="list-group-item">list text 2</li></ul></div></div>

/*
The (above) function is also equivalent to this (below). You can compose any amount of functions!
*/
var listGroupPanel2 = (0, _composePipeModule.compose)(basicPanel, _fcEx7ListGroupComposing.listGroupTag, _fcEx7ListGroupComposing.listGroupItems);
var r3 = listGroupPanel2(['list text 1', 'list text 2']);
console.log(r3);
// <div class="panel panel-default"><div class="panel-body"><ul class="list-group"><li class="list-group-item">list text 1</li><li class="list-group-item">list text 2</li></ul></div></div>
