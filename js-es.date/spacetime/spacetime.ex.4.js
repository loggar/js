// s5: 2020-01-10 1:31pm
// Move to the first millisecond of the day, week, month, year, etc.
const s11 = s5.startOf("month"); // 2020-01-01 12:00am
// Move to the last millisecond of the day, week, month, year, etc.
const s12 = s5.endOf("week"); // 2020-01-12 11:59pm
// Increment the date/time by a number and unit
const s13 = s5.add(1, "season"); // 2020-05-10 1:31pm
// Decrease the date/time by a number and unit
const s14 = s5.subtract(2, "years"); // 2018-01-10 1:31pm
// Move forward/backward to the closest unit
const s15 = s5.nearest("hour"); // 2020-01-10 2:00pm
// Go to the beginning of the next unit
const s16 = s5.next("quarter"); // 2020-01-04 12:00am
// Go to the beginning of the previous unit
const s17 = s5.last("month"); // 2019-12-01 12:00am
