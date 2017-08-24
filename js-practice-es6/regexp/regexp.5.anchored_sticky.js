var re = /^foo/y,
	str = "foo";

re.test(str);            // true
re.test(str);            // false
re.lastIndex;            // 0 -- reset after failure

re.lastIndex = 1;
re.test(str);            // false -- failed for positioning
re.lastIndex;            // 0 -- reset after failure