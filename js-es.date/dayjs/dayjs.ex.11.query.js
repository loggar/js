dayjs(new Date()).isValid();
// output => true

dayjs("2019–10–04").isBefore("2019–10–06");
// output => true

dayjs("2019–10–04").isSame("2019–10–06");
// output => false
dayjs("2019–10–04").isSame("2019–10–04");
// output => true
dayjs("2019–10–04").isSame("2019–10–06", "month");
// output => true

dayjs("2019–10–06").isAfter("2019–10–04");
// output => true

/*
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);
*/
// dayjs requires isBetween plugin
dayjs("2019–10–05").isBetween("2010–10–04", "2010–10–06");
// output => true

/*
import isLeapYear from 'dayjs/plugin/isLeapYear';
dayjs.extend(isLeapYear);
*/
// dayjs requires isLeapYear plugin
dayjs("2020–01–01").isLeapYear();
// output => true
