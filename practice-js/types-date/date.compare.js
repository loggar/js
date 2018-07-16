var dateCriterion = new Date('2018-07-12 00:00:00:000');
var dateReport1 = new Date('2018-07-10 00:00:00:000');
var dateReport2 = new Date('2018-07-11 00:00:00:000');
var dateReport3 = new Date('2018-07-12 00:00:00:000');
var dateReport4 = new Date('2018-07-13 00:00:00:000');

console.log(dateReport1.getTime() < dateCriterion.getTime());
console.log(dateReport2.getTime() < dateCriterion.getTime());
console.log(dateReport3.getTime() < dateCriterion.getTime());
console.log(dateReport4.getTime() < dateCriterion.getTime());
