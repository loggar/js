// dd/mm/yyyy to yyyy-mm-dd
var str = "15/02/2021";
var strEmpty = "";

const convertDateFormat = function (s) {
  if (!s) return "";
  let arr = s.split("/");
  if (!arr || arr.length != 3) return "";
  return arr[2] + "-" + arr[1] + "-" + arr[0];
};

console.log(convertDateFormat(str));
console.log(convertDateFormat(strEmpty));

// yyyy-mm-dd to dd/mm/yyyy
const reverseDateFormat = function (s) {
  if (!s) return "";
  let arr = s.split("-");
  if (!arr || arr.length != 3) return "";
  return arr[2] + "/" + arr[1] + "/" + arr[0];
};

console.log(reverseDateFormat(convertDateFormat(str)));
console.log(reverseDateFormat(convertDateFormat(strEmpty)));

koiDatepicker.convertDateFormat()
koiDatepicker.reverseDateFormat()