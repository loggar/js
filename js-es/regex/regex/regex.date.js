var r_date = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

var dates = ["12/12/1999", "21/05/2019", "01/01/2010", "1/5/2010"];
var result = dates.map(function(item) {
  return r_date.test(item);
});

console.log(result);
