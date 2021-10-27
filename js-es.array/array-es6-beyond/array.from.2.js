var arrLike = {
  length: 4,
  2: "foo",
};

Array.from(arrLike);
// [ undefined, undefined, "foo", undefined ]

var emptySlotsArr = [];
emptySlotsArr.length = 4;
emptySlotsArr[2] = "foo";

Array.from(emptySlotsArr);
// [ undefined, undefined, "foo", undefined ]

var a = Array(4); // four empty slots!

var b = Array.apply(null, { length: 4 }); // four `undefined` values

var c = Array.from({ length: 4 }); // four `undefined` values
