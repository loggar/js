/**
 * find the max occurrences of the elements based on multiple keys
 * @param {*} arr array<string>
 * @param {*} words array<string>
 * @returns object<result: array<number>, max: number>
 */
const max_occurrence_multiple_keys = function (arr = [], words = []) {
  const a = [];

  arr.forEach(function (v, i) {
    let o = 0;
    words.forEach(function (w) {
      o += countOccurrences(v, w);
    });
    a.push({
      k: i,
      v: v,
      o: o,
    });
  });

  console.log("detail", a);

  const maxCnt = Math.max(...a.map((item) => item.o));

  return {
    max: maxCnt,
    result: a.filter((item) => item.o === maxCnt),
  };
};

/**
 * Test example : max_occurrence_multiple_keys
 */
const testTask = (function () {
  const arr1 = [
    "a b cx",
    "absda a a fdea a a cxd",
    "ddsdfa kmekty ead",
    "asdfsda  da ad",
    "bcxcx",
    "a c a a a a cxcxcsdfstdfe",
    "fwercxqea dwawe",
  ];

  const words = ["a ", "cx"];
  const occur = max_occurrence_multiple_keys(arr1, words);
  console.log("result", occur);

  assertTrue(
    arraysEquals(
      occur.result.map((item) => item.v),
      ["absda a a fdea a a cxd", "a c a a a a cxcxcsdfstdfe"]
    )
  );
})();

/**
 * count word occurrences in a string
 * @param {*} str
 * @param {*} word
 * @returns
 */
function countOccurrences(str = "", word = "") {
  return str.split(word).length - 1;
}

function arraysEquals(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function assertTrue(v) {
  if (!v) throw new Error("assert fail");
  return v;
}
