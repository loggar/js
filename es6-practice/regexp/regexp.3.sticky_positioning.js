var re = /f../y,
	str = "foo       far       fad";

str.match(re);        // ["foo"]

re.lastIndex = 10;
str.match(re);        // ["far"]

re.lastIndex = 20;
str.match(re);        // ["fad"]


var re = /\d+\.\s(.*?)(?:\s|$)/y
str = "1. foo 2. bar 3. baz";

str.match(re);        // [ "1. foo ", "foo" ]

re.lastIndex;            // 7 -- correct position!
str.match(re);        // [ "2. bar ", "bar" ]

re.lastIndex;            // 14 -- correct position!
str.match(re);        // ["3. baz", "baz"]