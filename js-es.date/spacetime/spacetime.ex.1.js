// ISO Format
const s1 = spacetime("2020-12-01");
// As long date
const s2 = spacetime("Dec 02 2020 17:50");
// As epoch in ms
const s3 = spacetime(1606975200000);
// As an array (months are zero-based)
const s4 = spacetime([2020, 0, 1, 20, 0]);
// As an object (months are zero-based)
const s5 = spacetime({ year: 2020, month: 0, date: 1 });
// Current time
const s6 = spacetime.now();
// Today at midgnight
const s7 = spacetime.today();
// Tomorrow at midnight
const s8 = spacetime.tomorrow();
