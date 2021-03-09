const toFormatCurrency = function (target, region, minFracDigit, maxFracDigit) {
  var minFractionDigits = minFracDigit || 2;
  var maxFractionDigits = maxFracDigit || 2;
  if (minFractionDigits > maxFractionDigits)
    minFractionDigits = maxFractionDigits;
  var formatter = new Intl.NumberFormat(region || "en-AU", {
    minimumFractionDigits: minFractionDigits,
    maximumFractionDigits: maxFractionDigits,
  });
  return formatter.format(target);
};

var n = 10000.5;

var c1 = toFormatCurrency(n, "en-UK");
var c2 = toFormatCurrency(n, "en-AU");
var c3 = toFormatCurrency(n, "en-US");

console.log("$" + c1);
console.log("$" + c2);
console.log("$" + c3);
