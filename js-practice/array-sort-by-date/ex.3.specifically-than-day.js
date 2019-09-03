const dateArray = [{ date: new Date("December 17, 1995 03:30:00") }, { date: new Date("December 17, 1995 02:20:00") }, { date: new Date("December 17, 1995 01:10:00") }];
console.log(dateArray.map(a => a.date.valueOf()));

const sortedArray = dateArray.sort((a, b) => a.date.valueOf() - b.date.valueOf());
console.log(sortedArray);
console.log(dateArray);
