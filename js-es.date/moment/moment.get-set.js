moment()
  .seconds(30)
  .valueOf() === new Date().setSeconds(30);
moment().seconds() === new Date().getSeconds();

moment
  .utc()
  .seconds(30)
  .valueOf() === new Date().setUTCSeconds(30);
moment.utc().seconds() === new Date().getUTCSeconds();

moment().millisecond(Number);
moment().millisecond(); // Number
moment().milliseconds(Number);
moment().milliseconds(); // Number

moment().second(Number);
moment().second(); // Number
moment().seconds(Number);
moment().seconds(); // Number

moment().minute(Number);
moment().minute(); // Number
moment().minutes(Number);
moment().minutes(); // Number

moment().hour(Number);
moment().hour(); // Number
moment().hours(Number);
moment().hours(); // Number

moment().date(Number);
moment().date(); // Number
moment().dates(Number);
moment().dates(); // Number

moment().get("year");
moment().get("month"); // 0 to 11
moment().get("date");
moment().get("hour");
moment().get("minute");
moment().get("second");
moment().get("millisecond");

moment().get(unit) === moment()[unit]();

moment().set("year", 2013);
moment().set("month", 3); // April
moment().set("date", 1);
moment().set("hour", 13);
moment().set("minute", 20);
moment().set("second", 30);
moment().set("millisecond", 123);

moment().set({ year: 2013, month: 3 });
