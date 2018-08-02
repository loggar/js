var re = /foo/ig;

re.toString();            // "/foo/ig"

var flags = re.toString().match(/\/([gim]*)$/)[1];

flags;                    // "ig"

re.flags;


var re1 = /foo*/y;
re1.source;                            // "foo*"
re1.flags;                            // "y"

var re2 = new RegExp(re1);
re2.source;                            // "foo*"
re2.flags;                            // "y"

var re3 = new RegExp(re1, "ig");
re3.source;                            // "foo*"
re3.flags;                            // "gi"