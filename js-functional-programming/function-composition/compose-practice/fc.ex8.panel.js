import { compose } from '../compose-pipe/compose-pipe.module.build'
import tag from './fc.ex4.tag-attr.module.build'
import { listGroup, listGroupTag, listGroupItems } from './fc.ex7.list-group.composing.build'

const panelTag = tag({ tag: 'div', attr: { class: 'panel panel-default' } })
const panelBody = tag({ tag: 'div', attr: { class: 'panel-body' } })
const basicPanel = compose(panelTag, panelBody)

const r1 = basicPanel('panel text')
console.log(r1)
// <div class="panel panel-default"><div class="panel-body">panel text</div></div>

/*
Now if we want to create an element that is a list-group inside of a panel, all we have to do is this:
*/

const listGroupPanel = compose(basicPanel, listGroup)
const r2 = listGroupPanel(['list text 1', 'list text 2'])
console.log(r2)
// <div class="panel panel-default"><div class="panel-body"><ul class="list-group"><li class="list-group-item">list text 1</li><li class="list-group-item">list text 2</li></ul></div></div>

/*
The (above) function is also equivalent to this (below). You can compose any amount of functions!
*/
const listGroupPanel2 = compose(basicPanel, listGroupTag, listGroupItems)
const r3 = listGroupPanel2(['list text 1', 'list text 2'])
console.log(r3)
// <div class="panel panel-default"><div class="panel-body"><ul class="list-group"><li class="list-group-item">list text 1</li><li class="list-group-item">list text 2</li></ul></div></div>
