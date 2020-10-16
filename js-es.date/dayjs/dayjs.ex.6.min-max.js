const array = [
  new Date(1996, 10, 06),
  new Date(1994, 6, 18),
  new Date(1993, 5, 25),
  new Date(1959, 10, 4),
];

// Moment.js
moment.max(array.map((a) => moment(a)));
// output => "1996-11-06T13:00:00.000Z"
moment.min(array.map((a) => moment(a)));
// output => "1959-11-04T13:00:00.000Z"

/*
import minMax from 'dayjs/plugin/minMax';
dayjs.extend(minMax);
*/

// dayjs requires minMax plugin
dayjs.max(array.map((a) => dayjs(a)));
// output => "1996-11-06T13:00:00.000Z"
dayjs.min(array.map((a) => dayjs(a)));
// output => "1959-11-04T13:00:00.000Z"
