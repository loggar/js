class LinkedList {
	constructor() {
		this._length = 0
		this._head = 0
	}

	add(value) {
		const node = {
			value,
			next: null
		}

		if (this._length === 0) {
			this._length = 1
			this._head = node
			return
		}

		let current = this._head

		while (current.next !== null) {
			current = current.next
		}

		current.next = node
		this._length++
	}

	/*
	Another approach is to add the element as a first item to the list, add it as a new head and have it point to the former head element. This functionality will always require the same number of steps no matter the size of the data structure.
	*/
	/*
	addHead(value) {
		let node = {
			value,
			next: this._head
		}

		this._head = node
	}
	*/

	remove(key) {
		if (this._head.value === key) {
			this._head = this._head.next
			this._length--
			return
		}

		let current = this._head.next
		let previous = this._head

		while (current !== null) {
			if (current.value === key) {
				previous.next = current.next
				this._length--
				break
			}

			previous = current
			current = current.next
		}
	}
}
