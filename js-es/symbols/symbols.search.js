// Find the index of the first character following a string like:
//    "Name:\t"
const nameFinder = {
  [Symbol.search](s) {
    const result = /Name:\s*/.exec(s);
    if (result) {
      const { 0: label, index } = result;
      return index + label.length;
    } else {
      return -1;
    }
  },
};

// imagine this was read in from a file
const doc = `Customer Information
ID: 11223344
Name:   John Smith
Address:    123 Main Street
...`;

const customerNameStart = doc.search(nameFinder);
const customerName = doc.slice(
  customerNameStart,
  doc.indexOf("\n", customerNameStart)
);

console.log(customerNameStart);
console.log(customerName);
