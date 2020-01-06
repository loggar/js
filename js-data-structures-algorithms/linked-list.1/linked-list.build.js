"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @Module Linked List
 * @Desc node (key, value}
 * 
 */
var LinkedList = function () {
	function LinkedList() {
		_classCallCheck(this, LinkedList);

		this._length = 0;
		this._head = 0;
	}

	_createClass(LinkedList, [{
		key: "clear",
		value: function clear() {
			this._length = 0;
			this._head = 0;
		}
	}, {
		key: "add",
		value: function add(key, value) {
			var node = {
				key: key,
				value: value,
				next: null
			};

			if (this._length === 0) {
				this._length = 1;
				this._head = node;
				return;
			}

			var current = this._head;
			while (current.next !== null) {
				current = current.next;
			}

			current.next = node;
			this._length++;
		}
	}, {
		key: "addHead",
		value: function addHead(key, value) {
			var node = {
				key: key,
				value: value,
				next: this._head
			};

			this._head = node;
		}
	}, {
		key: "remove",
		value: function remove(key) {
			if (this._head.key === key) {
				this._head = this._head.next;
				this._length--;
				return;
			}

			var current = this._head.next;
			var previous = this._head;

			while (current !== null) {
				if (current.key === key) {
					previous.next = current.next;
					this._length--;
					break;
				}

				previous = current;
				current = current.next;
			}
		}
	}, {
		key: "get",
		value: function get(key) {
			if (this._head.key === key) {
				return this._head;
			}

			var r = void 0;
			var current = this._head.next;
			var previous = this._head;

			while (current !== null) {
				if (current.key === key) {
					r = current;
					break;
				}
				previous = current;
				current = current.next;
			}
			return r;
		}
	}, {
		key: "set",
		value: function set(key, value) {
			if (this._head.key === key) {
				this._head.value = value;
				return;
			}

			var current = this._head.next;
			var previous = this._head;

			while (current !== null) {
				if (current.key === key) {
					current.value = value;
					break;
				}
				previous = current;
				current = current.next;
			}
			return;
		}
	}, {
		key: "toArray",
		value: function toArray() {
			var arr = [];
			if (!this._head) return arr;
			var current = this._head;
			while (current !== null) {
				arr.push({
					key: current.key,
					value: current.value
				});
				current = current.next;
			}
			return arr;
		}
	}]);

	return LinkedList;
}();

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
