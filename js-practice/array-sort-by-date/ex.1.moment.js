import moment from "moment";

const dateArray = [{ date: "2018-05-11" }, { date: "2018-05-12" }, { date: "2018-05-10" }];

const sortDates = (a, b) => moment(a.date).format("YYYYMMDD") - moment(b.date).format("YYYYMMDD");
const sortedDates = dateArray.sort(sortDates);

console.log(dateArray);
console.log(sortedDates);
