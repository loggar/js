import { compose } from './compose-pipe.module.build'
import tag from './fc.ex4.tag-attr.module.build'

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

const listGroupTag = tag({ tag: 'ul', attr: { class: 'list-group' } })
const listGroupItem = tag({ tag: 'li', attr: { class: 'list-group-item' } })
const listGroupItems = items =>
	items.map(listGroupItem)
		.join('')

const listGroup = compose(listGroupTag, listGroupItems)
// const r5 = listGroup(['Cras justo', 'Dapibus ac'])
// console.log(r5)

export { listGroup, listGroupTag, listGroupItems }
