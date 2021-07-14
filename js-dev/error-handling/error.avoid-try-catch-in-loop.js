// do not
var object = ["foo", "bar"],
  i;
for (i = 0, len = object.length; i < len; i++) {
  try {
    // do something that throws an exception
  } catch (e) {
    // handle exception
  }
}

// do
var object = ["foo", "bar"],
  i;
try {
  for (i = 0, len = object.length; i < len; i++) {
    // do something that throws an exception
  }
} catch (e) {
  // handle exception
}
