/*
import advancedFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(advancedFormat);
*/

// Moment.js
moment().format("dddd, MMMM Do YYYY, h:mm:ss A");
// output => "Friday, October 4th 2019, 7:12:49 PM"
moment().format("ddd, hA");
// output => "Fri, 7PM"

// dayjs
dayjs().format("dddd, MMMM D YYYY, h:mm:ss A");
// output => "Friday, October 4th 2019, 7:12:49 PM"
dayjs().format("ddd, hA");
// output => "Fri, 7PM"
// dayjs requires advancedFormat plugin to support more format tokens
dayjs().format("dddd, MMMM Do YYYY, h:mm:ss A");
// output => "Friday, October 4th 2019, 7:12:49 PM"
