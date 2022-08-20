const moment = require("moment");

const m1 = moment("20220820", "YYYYMMDD");
console.log(m1.isValid(), m1.format(), m1.format("YYYY-MM-DD"));

const m2 = moment("2022-08-20", "YYYYMMDD", true);
console.log(m2.isValid(), m2.format("YYYY-MM-DD"));

const m3 = moment("2022-13-31", "YYYYMMDD", true);
console.log(m3.isValid(), m3.format("YYYY-MM-DD"));

const m4 = moment("2022-08-20", "YYYYMMDD");
console.log(m4.isValid(), m4.format("YYYY-MM-DD"));
