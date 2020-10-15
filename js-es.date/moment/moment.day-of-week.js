moment().day(-7); // last Sunday (0 - 7)
moment().day(0); // this Sunday (0)
moment().day(7); // next Sunday (0 + 7)
moment().day(10); // next Wednesday (3 + 7)
moment().day(24); // 3 Wednesdays from now (3 + 7 + 7 + 7)

moment().day("Sunday");
moment().day("Monday");

// Day of Week (Locale Aware) 2.1.0+

// when Monday is the first day of the week
moment().weekday(-7); // last Monday
moment().weekday(7); // next Monday
// when Sunday is the first day of the week
moment().weekday(-7); // last Sunday
moment().weekday(7); // next Sunday

// ISO Day of Week 2.1.0+
moment().isoWeekday(1); // Monday
moment().isoWeekday(7); // Sunday

moment().isoWeekday("Sunday");
moment().isoWeekday("Monday");

// Day of Year 2.0.0+
moment().dayOfYear(Number);
moment().dayOfYear(); // Number

// Week of Year 2.0.0+
moment().week(Number);
moment().week(); // Number
moment().weeks(Number);
moment().weeks(); // Number

// Week of Year (ISO) 2.0.0+
moment().isoWeek(Number);
moment().isoWeek(); // Number
moment().isoWeeks(Number);
moment().isoWeeks(); // Number

// Month 1.0.0+
moment().month(Number | String);
moment().month(); // Number
moment().months(Number | String);
moment().months(); // Number

// Quarter 2.6.0+
moment("2013-01-01T00:00:00.000").quarter(); // 1
moment("2013-04-01T00:00:00.000")
  .subtract(1, "ms")
  .quarter(); // 1
moment("2013-04-01T00:00:00.000").quarter(); // 2
moment("2013-07-01T00:00:00.000")
  .subtract(1, "ms")
  .quarter(); // 2
moment("2013-07-01T00:00:00.000").quarter(); // 3
moment("2013-10-01T00:00:00.000")
  .subtract(1, "ms")
  .quarter(); // 3
moment("2013-10-01T00:00:00.000").quarter(); // 4
moment("2014-01-01T00:00:00.000")
  .subtract(1, "ms")
  .quarter(); // 4

moment("2013-01-01T00:00:00.000").quarter(2); // '2013-04-01T00:00:00.000'
moment("2013-02-05T05:06:07.000")
  .quarter(2)
  .format(); // '2013-05-05T05:06:07-07:00'

// Year 1.0.0+
moment().year(Number);
moment().year(); // Number
moment().years(Number);
moment().years(); // Number

// Week Year 2.1.0+
moment().weekYear(Number);
moment().weekYear(); // Number

// Week Year (ISO) 2.1.0+
moment().isoWeekYear(Number);
moment().isoWeekYear(); // Number

// Weeks In Year 2.6.0+
moment().weeksInYear();

// Weeks In Year (ISO) 2.6.0+
moment().isoWeeksInYear();
