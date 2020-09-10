let time = Date.now();
let status = 'Completed';

// Before:
let data = {
	time: time,
	status: status,
};

// After:
let data2 = { time, status };