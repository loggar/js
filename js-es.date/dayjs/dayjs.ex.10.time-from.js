/*
import relativeTime from ‘dayjs/plugin/relativeTime’;
dayjs.extend(relativeTime);
*/

// dayjs requires relativeTime plugin
dayjs(1536484369695).fromNow();
// output => "15 days ago"

// from 2019-10-06
// dayjs requires relativeTime plugin
dayjs("2019-10-04").to(dayjs("2019-10-06"));
// output => "in 2 days"

// time diff
dayjs("2019-10-04").diff(dayjs("2019-10-06"), "milliseconds");
// output => -172800000
dayjs("2019-10-04").diff(dayjs("2019-10-06"), "days");
// output => -2
