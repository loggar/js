var getId1 = function (v) {
  i_s = v.indexOf("[");
  i_e = v.indexOf("] ");
  if (i_s < 0 || i_e < 0) {
    return "";
  }
  var r = v.substring(i_s + 1, i_e);
  if (!r) {
    return "";
  } else {
    return r.trim();
  }
};

var getId2 = function (v) {
  i_s = v.indexOf(" (");
  i_e = v.indexOf(")");
  if (i_s < 0 || i_e < 0) {
    return "";
  }
  var r = v.substring(i_s + 2, i_e);
  if (!r) {
    return "";
  } else {
    return r.trim();
  }
};

var getId3 = function (v) {
  i_s = v.indexOf("] ") || 0;
  i_e = v.indexOf(" (") || v.length;

  if (i_s <= 0) {
    i_s = -2;
  }

  if (i_e < 0) {
    i_e = v.length;
  }

  var r = v.substring(i_s + 2, i_e);
  if (!r) {
    return "";
  } else {
    return r.trim();
  }
};

var parseInvoiceId = function (invoiceId) {
  invoiceId = invoiceId || "";
  invoiceId = invoiceId.trim();
  if (!invoiceId) {
    return {
      invoiceNo: "",
      applicantId: "",
      stdId: "",
    };
  } else {
    return {
      invoiceNo: getId1(invoiceId),
      applicantId: getId3(invoiceId),
      stdId: getId2(invoiceId),
    };
  }
};

// console.log("1", parseInvoiceId(""));
// console.log("2", parseInvoiceId("[ABC-2020-000004]  ()"));
// console.log("3", parseInvoiceId("[ABC-2020-000004] A4220095135 ()"));
// console.log("4", parseInvoiceId("[ABC-2020-000004]  (12000068)"));
// console.log("5", parseInvoiceId("[ABC-2020-000004] A4220095135 (12000068)"));
// console.log("5", parseInvoiceId("ABC-2020-000004"));
// console.log("6", parseInvoiceId("A4220095135 (12000068)"));
//console.log("7", parseInvoiceId(" A4220095135"));
// console.log("8", parseInvoiceId("[ABC-2020-000004] A4220095135"));
console.log("9", parseInvoiceId("[ABC-2020-000004] A4220095135 ()"));
