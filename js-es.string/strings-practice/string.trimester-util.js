const trimesterUtil = (function () {
  var orderedTrimester = function (t) {
    if (typeof t !== "string") t = t.toString();
    if (t.length !== 4) throw Error("invalid arg t:" + t);
    return t.substr(t.length - 2, 2) + t.substr(0, 2);
  };

  var compare = function (t1, t2) {
    if (!t1) throw Error("invalid arg t1:" + t1);
    if (!t2) throw Error("invalid arg t2:" + t2);
    if (typeof t1 !== "string") t1 = t1.toString();
    if (typeof t2 !== "string") t2 = t2.toString();
    var ordT1 = orderedTrimester(t1);
    var ordT2 = orderedTrimester(t2);
    if (t1 === t2 || ordT1 === ordT2) return 0;
    if (ordT1 < ordT2) return -1;
    return 1;
  };

  var diff = function (t1, t2) {
    if (!t1) throw Error("invalid arg t1:" + t1);
    if (!t2) throw Error("invalid arg t2:" + t2);
    if (typeof t1 !== "string") t1 = t1.toString();
    if (typeof t2 !== "string") t2 = t2.toString();
    var ordT1 = orderedTrimester(t1);
    var ordT2 = orderedTrimester(t2);
    var compareTwo = compare(t1, t2);
    if (t1 === t2 || ordT1 === ordT2) return 0;
    var ordT1y = parseInt(ordT1.substr(0, 2));
    var ordT1s = parseInt(ordT1.substr(ordT1.length - 2, 2));
    var ordT2y = parseInt(ordT2.substr(0, 2));
    var ordT2s = parseInt(ordT2.substr(ordT2.length - 2, 2));
    var yearGap = compareTwo < 0 ? ordT2y - ordT1y : ordT1y - ordT2y;
    var seqGap = compareTwo < 0 ? ordT2s - ordT1s : ordT1s - ordT2s;
    var triGap = yearGap * 3 + seqGap;
    return compareTwo < 0 ? triGap : 0 - triGap;
  };

  return {
    orderedTrimester: orderedTrimester,
    reversedTrimester: orderedTrimester,
    compare: compare,
    diff: diff,
  };
})();

trimesterUtil.diff("0121", "0221");
trimesterUtil.diff("0121", "0321");
trimesterUtil.diff("0121", "0122");
trimesterUtil.diff("0121", "0222");
trimesterUtil.diff("0121", "0322");
trimesterUtil.diff("0121", "0123");

trimesterUtil.diff("0121", "0222");
trimesterUtil.diff("0320", "0222");
trimesterUtil.diff("0220", "0222");
trimesterUtil.diff("0120", "0222");
trimesterUtil.diff("0319", "0222");
trimesterUtil.diff("0219", "0222");

trimesterUtil.diff("0221", "0121");
trimesterUtil.diff("0221", "0320");
trimesterUtil.diff("0221", "0220");
trimesterUtil.diff("0221", "0120");
trimesterUtil.diff("0221", "0319");
trimesterUtil.diff("0221", "0219");
