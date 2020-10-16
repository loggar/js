/*
import dayOfYear from 'dayjs/plugin/dayOfYear';
dayjs.extend(dayOfYear);
*/

// dayjs requires dayOfYear plugin
dayjs().dayOfYear();
// output => 277
dayjs().dayOfYear(277);
// output => "2019-10-04T09:12:49.695Z"
