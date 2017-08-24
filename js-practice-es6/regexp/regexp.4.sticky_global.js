var re = /o+./g,        // <-- look, `g`!
	str = "foot book more";

re.exec(str);            // ["oot"]
re.lastIndex;            // 4

re.exec(str);            // ["ook"]
re.lastIndex;            // 9

re.exec(str);            // ["or"]
re.lastIndex;            // 13

re.exec(str);            // null -- no more matches!
re.lastIndex;            // 0 -- starts over now!