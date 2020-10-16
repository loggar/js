s11.format("numeric-uk"); // 01/01/2020
s12.format("iso-utc"); // 2020-01-13T05:59:59.999Z
s13.format("mm/dd"); // 05/10
s14.format("nice"); // Jan 10th, 1:31pm
s15.format("quarter"); // Q1
// They can be combined using this syntax
s16.format("{day} {date-ordinal}, {month-short} {year}"); // Sunday 1st, Dec 2019

s17.unixFmt("yyyy/MM/dd h a"); // 2019/12/01 12 AM

spacetime("September 1 2020").since("September 30 2020");
/*
{
   "diff": {
      "years": 0,
      "months": 0,
      "days": -29,
      "hours": 0,
      "minutes": 0,
      "seconds": 0
   },
   "rounded": "in 29 days",
   "qualified": "in 29 days",
   "precise": "in 29 days"
}
*/
