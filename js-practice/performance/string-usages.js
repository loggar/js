'0123456789'.slice(-9); // => '123456789'
'0123456789'.substr(-9); // => '123456789'
// Cut string: slice / x21 faster


// Convert to number
parseInt('1234', 10); // => 1234
+'1234'; // => 1234
// Convert to number: +sign / x6.12 faster
