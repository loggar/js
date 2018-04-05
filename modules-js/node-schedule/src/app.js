var schedule = require('node-schedule');

/*
Cron-style Scheduling
*/

var s1 = schedule.scheduleJob('42 * * * * *', function () {
	console.log(new Date(), '10 * * * * *');
});

var s2 = schedule.scheduleJob('0 17 ? * 0,4-6', function () {
	console.log(new Date(), 'Today is recognized by Rebecca Black!');
});

var s3 = schedule.scheduleJob('20 * * * * *', function (fireDate) {
	console.log(new Date(), 'This job was supposed to run at ', fireDate);
});

/*
Date-based Scheduling
*/

var s4 = (function () {
	var date = new Date('05 Apr 2018 15:15:00');
	var j = schedule.scheduleJob(date, function () {
		console.log(new Date(), 'The world is going to end today.');
	});

	return j;
})();

var s5 = (function () {
	var date = new Date('05 Apr 2018 15:15:05');
	var x = 'Tada!';
	var j = schedule.scheduleJob(date, function (y) {
		console.log(new Date(), y);
	}.bind(null, x));
	x = 'Changing Data';

	return j;
})();

/*
Recurrence Rule Scheduling
*/

var s6 = (function () {
	var rule = new schedule.RecurrenceRule();
	rule.minute = 1;

	var j = schedule.scheduleJob(rule, function () {
		console.log(new Date(), 'Recurrence Rule Scheduling ', rule.minute, 'minute');
	});

	return j;
})();

var s7 = (function () {
	var rule = new schedule.RecurrenceRule();
	rule.dayOfWeek = [0, new schedule.Range(4, 6)];
	rule.hour = 17;
	rule.minute = 0;

	var j = schedule.scheduleJob(rule, function () {
		console.log(new Date(), 'RecurrenceRule every Thursday, Friday, Saturday, and Sunday at 5pm');
	});
})();

