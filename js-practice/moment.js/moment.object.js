moment({ hour: 15, minute: 10 });
moment({ y: 2010, M: 3, d: 5, h: 15, m: 10, s: 3, ms: 123 });
moment({ year: 2010, month: 3, day: 5, hour: 15, minute: 10, second: 3, millisecond: 123 });
moment({ years: 2010, months: 3, days: 5, hours: 15, minutes: 10, seconds: 3, milliseconds: 123 });
moment({ years: 2010, months: 3, date: 5, hours: 15, minutes: 10, seconds: 3, milliseconds: 123 });
moment({ years: "2010", months: "3", date: "5", hours: "15", minutes: "10", seconds: "3", milliseconds: "123" }); // from 2.11.0

// unix timestamp
var day = moment.unix(1318781876);
var day = moment.unix(1318781876.721);
var day = moment.unix(1318781876).utc();

// Date
var day = new Date(2011, 9, 16);
var dayWrapper = moment(day);

// Array
moment([2010, 1, 14, 15, 25, 50, 125]); // February 14th, 3:25:50.125 PM
moment([2010]); // January 1st
moment([2010, 6]); // July 1st
moment([2010, 6, 10]); // July 10th

moment.utc([2010, 1, 14, 15, 25, 50, 125]);

moment([2010, 12]).isValid(); // false (not a real month)
moment([2010, 10, 31]).isValid(); // false (not a real day)
moment([2010, 1, 29]).isValid(); // false (not a leap year)

// ASP.Net Json Date
moment("/Date(1198908717056-0700)/"); // 2007-12-28T23:11:57.056-07:00

// clone
var a = moment([2012]);
var b = moment(a);
a.year(2000);
b.year(); // 2012

var a = moment([2012]);
var b = a.clone();
a.year(2000);
b.year(); // 2012

// UTC
moment().format(); // 2013-02-04T10:35:24-08:00
moment.utc().format(); // 2013-02-04T18:35:24+00:00

moment
  .utc()
  .seconds(30)
  .valueOf() === new Date().setUTCSeconds(30);
moment.utc().seconds() === new Date().getUTCSeconds();

var a = moment();
var b = moment.utc();
a.format(); // 2013-02-04T10:35:24-08:00
b.format(); // 2013-02-04T18:35:24+00:00
a.valueOf(); // 1360002924000
b.valueOf(); // 1360002924000

var a = moment.utc([2011, 0, 1, 8]);
a.hours(); // 8 UTC
a.local();
a.hours(); // 0 PST

// Creation Data
moment("2013-01-02", "YYYY-MM-DD", true).creationData() ===
  {
    input: "2013-01-02",
    format: "YYYY-MM-DD",
    locale: new Locale("some"),
    isUTC: false,
    strict: true
  };

// Defaults
moment(); // current date and time

moment(5, "HH"); // today, 5:00:00.000
moment({ hour: 5 }); // today, 5:00:00.000
moment({ hour: 5, minute: 10 }); // today, 5:10.00.000
moment({ hour: 5, minute: 10, seconds: 20 }); // today, 5:10.20.000
moment({ hour: 5, minute: 10, seconds: 20, milliseconds: 300 }); // today, 5:10.20.300

moment(5, "DD"); // this month, 5th day-of-month
moment("4 05:06:07", "DD hh:mm:ss"); // this month, 4th day-of-month, 05:06:07.000

moment(3, "MM"); // this year, 3rd month (March)
moment("Apr 4 05:06:07", "MMM DD hh:mm:ss"); // this year, 4th April, 05:06:07.000
