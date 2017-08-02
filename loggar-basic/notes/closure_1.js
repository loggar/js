var sequencer_1 = function () {
	var count = 0;
	
	return function() { return ++count;};
};

var seq_1 = sequencer_1();

console.log(seq_1());
console.log(seq_1());
console.log(seq_1());




var sequencer_2 = function (base) {
	var count = base;
	
	return function() { return ++count;};
};

var base_0_seq = sequencer_2(0);
var base_100_seq = sequencer_2(100);

console.log(base_0_seq());
console.log(base_0_seq());
console.log(base_100_seq());
console.log(base_100_seq());
console.log(base_0_seq());
