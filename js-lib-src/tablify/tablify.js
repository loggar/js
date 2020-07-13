const toHtmlTable = function (arr) {
  if (!arr || !arr.length) {
    return "";
  }

  var head = "";
  var body = "";
  var r1 = arr[0];

  var pNames = Object.keys(r1);
  for (var p of pNames) {
    head += `<th style="padding-right: 10px;">${p}</th>`;
  }

  for (var item of arr) {
    body += "<tr>";
    for (var p of pNames) {
      body += `<td>${item[p]}</td>`;
    }
    body += "</tr>";
  }

  return (
    "<table><thead><tr>" +
    head +
    "</tr></thead>" +
    "<tbody>" +
    body +
    "</tbody></table>"
  );
};

module.exports = toHtmlTable;
