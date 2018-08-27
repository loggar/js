class LinkedList {
	constructor() {
		this._length = 0
		this._head = 0
	}

	add(key, value) {
		const node = {
			key: key,
			value: value,
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

	addHead(key, value) {
		let node = {
			key: key,
			value: value,
			next: this._head
		}

		this._head = node
	}

	remove(key) {
		if (this._head.key === key) {
			this._head = this._head.next
			this._length--
			return
		}

		let current = this._head.next
		let previous = this._head

		while (current !== null) {
			if (current.key === key) {
				previous.next = current.next
				this._length--
				break
			}

			previous = current
			current = current.next
		}
	}

	toArray() {
		let arr = [];
		let current = this._head
		while (current !== null) {
			arr.push({
				key: current.key,
				value: current.value
			})
			current = current.next;
		}
		return arr;
	}
}


var ql = new LinkedList();
ql.add(ql._length, {
	a: 1
});

ql.add(ql._length, {
	a: 2
});

ql.add(ql._length, {
	a: 3
});


ql.add(ql._length, {
	a: 4
});

console.log(ql.toArray());

ql.remove(2);
console.log(ql.toArray());