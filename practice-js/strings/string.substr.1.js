var {is, not} = require("../../modules-js/loggar-test/simple-test.js");

/* year and semester 3 */
var trimester_c = "0217";
var trimester_1 = "0216";
var trimester_2 = "0315";
var trimester_3 = "0217";
var trimester_4 = "0317";
var trimester_5 = "0118";

var trimester_order = function(t) {
  if(typeof t !== "string" || t.length !== 4) throw Error("invalid arg t:" + t);
  return t.substr(t.length-2, 2) + t.substr(0,2);
}

var trimester_compare = function(t1, t2) {
  if(trimester_order(t1) < trimester_order(t2)) return -1;
  else if(trimester_order(t1) === trimester_order(t2)) return 0;
  else return 1;
}

is(1, trimester_order(trimester_c) === "1702");
is(2, trimester_order(trimester_c) > trimester_order(trimester_1));
is(3, trimester_order(trimester_c) > trimester_order(trimester_2));
is(4, trimester_order(trimester_c) === trimester_order(trimester_3));
is(5, trimester_order(trimester_c) < trimester_order(trimester_4));
is(6, trimester_order(trimester_c) < trimester_order(trimester_5));

not(7, trimester_order(trimester_c) < trimester_order(trimester_1));
not(8, trimester_order(trimester_c) < trimester_order(trimester_2));
not(9, trimester_order(trimester_c) !== trimester_order(trimester_3));
not(10, trimester_order(trimester_c) > trimester_order(trimester_4));
not(11, trimester_order(trimester_c) > trimester_order(trimester_5));