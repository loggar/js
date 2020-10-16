dayjs().second();
// output => 58
dayjs().hour();
// output => 18

dayjs().set("second", 30);
// output => "2019-10-06T09:12:30.695Z"
dayjs().set("hour", 13);
// output => "2019-10-06T03:12:49.695Z"

dayjs().date();
// output => 4
dayjs().set("date", 6);
// output => "2019-10-06T09:12:49.695Z"

dayjs().day();
// output => 0 (friday)
dayjs().set("day", -14);
// output => "2019-09-26T09:12:49.695Z"
