const s18 = spacetime(1601521200000, "Europe/Paris");
const s19 = spacetime([2020, 0, 1, 20, 0], "Lima"); // America/Lima
const s20 = spacetime.now("-4h");

const s21 = s18.goto("Australia/Sydney"); // Oct 1 2020, 1:00pm
const s22 = s18.goto("GMT-5"); //-5 is actually +5

spacetime.whereIts("12:00pm", "2:00pm"); // ["asia/seoul", "asia/tokyo", "pacific/palau", "australia/adelaide", ...]
spacetime.whereIts("10am"); // Within an hour, from 10am to 11am

s21.timezone();
/*
{
   "name": "Australia/Sydney",
   "hasDst": true,
   "default_offset": 10,
   "hemisphere": "South",
   "current": {
      "offset": 10,
      "isDST": false
   },
   "change": {
      "start": "04/05:03",
      "back": "10/04:02"
   }
}
*/
