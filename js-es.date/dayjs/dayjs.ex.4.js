/*
import weekOfYear from 'dayjs/plugin/weekOfYear';
dayjs.extend(weekOfYear);
*/

// dayjs requires weekOfYear plugin
dayjs().week();
// output=> 40
dayjs().week(41);
// output => "2019-10-11T09:12:49.695Z"
