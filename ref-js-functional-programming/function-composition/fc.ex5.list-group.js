import tag from './fc.ex4.tag-attr.module.build'

const listGroup = tag({ tag: 'ul', attr: { class: 'list-group' } })
const listGroupItem = tag({ tag: 'li', attr: { class: 'list-group-item' } })
const listGroupItems = items =>
	items.map(listGroupItem)
		.join('')

const r1 = listGroup()
console.log(r1)
// <ul class="list-group"></ul>

const r2 = listGroupItem('Cras justo')
console.log(r2)
// <li class="list-group-item">Cras justo</li>

const r3 = listGroupItems(['Cras justo', 'Dapibus ac'])
console.log(r3)
// <li class='list-group-item'>Cras justo</li>
// <li class='list-group-item'>Dapibus ac</li>

const r4 = listGroup(listGroupItems(['Cras justo', 'Dapibus ac']))
console.log(r4)
// <ul class='list-group'>
//   <li class='list-group-item'>Cras justo</li>
//   <li class='list-group-item'>Dapibus ac</li>
// </ul>


