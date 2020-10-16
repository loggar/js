/*
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
*/

// dayjs requires customParseFormat plugin
dayjs("2019-10-06 4:30", "YYYY-MM-DD HH:mm");
// output => "2019-10-06T17:30:00.000Z"

// dayjs requires customParseFormat plugin
dayjs("2019 mars", "YYYY MMM", "fr");
// => "2019-02-29T13:00:00.000Z"
