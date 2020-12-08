import moment from "moment";
import _ from "lodash";

const dateArray = [{ date: "2018-05-11" }, { date: "2018-05-12" }, { date: "2018-05-10" }];

const sortedArray = _.orderBy(
  dateArray,
  o => {
    return moment(o.date).format("YYYYMMDD");
  },
  ["asc"]
);

console.log(dateArray);
console.log(sortedArray);
