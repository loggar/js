moment("12-25-1995", "MM-DD-YYYY");
moment("12-25-1995", "MM-DD-YYYY");
moment("12/25/1995", "MM-DD-YYYY");

moment("2010-10-20 4:30", "YYYY-MM-DD HH:mm"); // parsed as 4:30 local time
moment("2010-10-20 4:30 +0000", "YYYY-MM-DD HH:mm Z"); // parsed as 4:30 UTC

moment("2010 13", "YYYY MM").isValid(); // false (not a real month)
moment("2010 11 31", "YYYY MM DD").isValid(); // false (not a real day)
moment("2010 2 29", "YYYY MM DD").isValid(); // false (not a leap year)
moment("2010 notamonth 29", "YYYY MMM DD").isValid(); // false (not a real month name)

moment("2012 juillet", "YYYY MMM", "fr");
moment("2012 July", "YYYY MMM", "en");

moment("2016 is a date", "YYYY-MM-DD").isValid(); //true, 2016 was matched

moment("I am spartacus", "h:hh A").isValid(); //true - the 'am' matches the 'A' flag.

moment("It is 2012-05-25", "YYYY-MM-DD").isValid(); // true
moment("It is 2012-05-25", "YYYY-MM-DD", true).isValid(); // false
moment("2012-05-25", "YYYY-MM-DD", true).isValid(); // true
moment("2012.05.25", "YYYY-MM-DD", true).isValid(); // false

moment("2012-10-14", "YYYY-MM-DD", "fr", true);

moment.parseTwoDigitYear = function(yearString) {
  return parseInt(yearString) + 2000;
};

moment("123", "hmm").format("HH:mm") === "01:23";
moment("1234", "hmm").format("HH:mm") === "12:34";

moment("12-25-1995", ["MM-DD-YYYY", "YYYY-MM-DD"]);

moment("29-06-1995", ["MM-DD-YYYY", "DD-MM", "DD-MM-YYYY"]); // uses the last format
moment("05-06-1995", ["MM-DD-YYYY", "DD-MM-YYYY"]); // uses the first format

moment("29-06-1995", ["MM-DD-YYYY", "DD-MM-YYYY"], "fr"); // uses 'fr' locale
moment("29-06-1995", ["MM-DD-YYYY", "DD-MM-YYYY"], true); // uses strict parsing
moment("05-06-1995", ["MM-DD-YYYY", "DD-MM-YYYY"], "fr", true); // uses 'fr' locale and strict parsing

moment("2010-01-01T05:06:07", moment.ISO_8601);
moment("2010-01-01T05:06:07", ["YYYY", moment.ISO_8601]);
