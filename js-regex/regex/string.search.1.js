var show = console.log;

var slash = /\//;
show("AC/DC".search(slash));

var asteriskOrBrace = /[\{\*]/;
var story = "We noticed the *giant sloth*, hanging from a giant branch.";
show(story.search(asteriskOrBrace));

var digitSurroundedBySpace = /\s\d\s/;
show("1a 2 3d".search(digitSurroundedBySpace));

var notABC = /[^ABC]/;
show("ABCBACCBBADABC".search(notABC));

var datePattern = /\d\d\/\d\d\/\d\d\d\d/;
show("born 15/11/2003 (mother Spot): White Fang".search(datePattern));

var parenthesizedText = /\(.*\)/;
show("Its (the sloth's) claws were gigantic!".search(parenthesizedText));

var datePattern = /\d{1,2}\/\d\d?\/\d{4}/;
show("born 15/11/2003 (mother Spot): White Fang".search(datePattern));

var cartoonCrying = /boo(hoo+)+/i;
show("Then, he exclaimed 'Boohoooohoohooo'".search(cartoonCrying));

