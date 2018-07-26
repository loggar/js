import tag from './fc.ex4.tag-attr.module.build'

/*
If we look at the structure of the list-group html we can see that there is one outer element that contains multiple children. Since it will always be created this way, it seems a little verbose to call listGroup(listGroupItems([‘Cras justo’, ‘Dapibus ac’])) to render the list every time.
I should just be able to call listGroup([‘Cras justo’, ‘Dapibus ac’]). The function should know what I want to do.
To do this I’ll start by renaming listGroup to listGroupTag. That way I can create a new listGroup function that will encapsulate the call to listGroupTag(listGroupItems([])).
*/

const listGroupTag = tag({ tag: 'ul', attr: { class: 'list-group' } })

const listGroupItem = tag({ tag: 'li', attr: { class: 'list-group-item' } })

const listGroupItems = items =>
	items.map(listGroupItem)
		.join('')

const listGroup = items =>
	listGroupTag(listGroupItems(items))

const r5 = listGroup(['Cras justo', 'Dapibus ac'])
console.log(r5)
// <ul class="list-group"><li class="list-group-item">Cras justo</li><li class="list-group-item">Dapibus ac</li></ul>