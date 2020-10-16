// Sets a new date based on s1 with 400 milliseconds
const s9 = s1.millisecond(400);
// Get milliseconds: 400
console.log("s9.milliseconds(): " + s9.millisecond());
// Get month (zero-based): 11
console.log("s9.month(): " + s9.month());
// Get day of year: 336
console.log("s9.dayOfYear(): " + s9.dayOfYear());
// Get day of year: winter
console.log("s9.season(): " + s9.season());
// Set the hour + minute in decimal form
const s10 = s2.hourFloat(16.5);
// Get the time: 4:30pm
console.log("s10.time(): " + s10.time());
// How far the moment lands between the start and end of the day/week/month/year (percentage-based)
console.log("s3.progress('year'): " + s3.progress('year'));