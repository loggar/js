var {ok, not} = require("../lib/loggar-test/simple-test.js");

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

console.log(trimester_order(trimester_c) > trimester_order(trimester_1));
console.log(trimester_order(trimester_c) <= trimester_order(trimester_1));

var i = 1;
ok(i++, trimester_order(trimester_c) === "1702");
ok(i++, trimester_order(trimester_c) > trimester_order(trimester_1));
ok(i++, trimester_order(trimester_c) > trimester_order(trimester_2));
ok(i++, trimester_order(trimester_c) === trimester_order(trimester_3));
ok(i++, trimester_order(trimester_c) < trimester_order(trimester_4));
ok(i++, trimester_order(trimester_c) < trimester_order(trimester_5));

not(i++, trimester_order(trimester_c) < trimester_order(trimester_1));
not(i++, trimester_order(trimester_c) < trimester_order(trimester_2));
not(i++, trimester_order(trimester_c) !== trimester_order(trimester_3));
not(i++, trimester_order(trimester_c) > trimester_order(trimester_4));
not(i++, trimester_order(trimester_c) > trimester_order(trimester_5));