// s3: 2020-12-03
// s4: 2020-01-01
console.log("s3.isAfter(s4): " + s3.isAfter(s4));
console.log("s3.isBefore(s4): " + s3.isBefore(s4));
console.log("s3.isEqual(s4): " + s3.isEqual(s4));
console.log("s3.leapYear(): " + s3.leapYear());
// Detect if two date/times are the same day, week, or year, etc
console.log("s3.isSame(s4, 'year'): " + s3.isSame(s4, "year"));
// Given a date amd a unit, count how many of them you'd need to make the dates equal
console.log("s3.diff(s4, 'day'): " + s3.diff(s4, "day"));
// Is daylight-savings-time activated right now, for this timezone?
console.log("s3.inDST(): " + s3.inDST());
// Does this timezone ever use daylight-savings?
console.log("s3.hasDST(): " + s3.hasDST());
// The current, DST-aware time-difference from UTC, in hours
console.log("s3.offset(): " + s3.offset());
// Checks if the current time is between 10pm and 8am
console.log("s3.isAsleep(): " + s3.isAsleep());
