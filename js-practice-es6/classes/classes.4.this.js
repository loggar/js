class MyCoolArray extends Array {
	first() { return this[0]; }
	last() { return this[this.length - 1]; }
}

var a = new MyCoolArray(1, 2, 3);

a.length;                    // 3
a;                            // [1,2,3]

a.first();                    // 1
a.last();                    // 3