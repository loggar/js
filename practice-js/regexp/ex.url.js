var parse_url = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/;

var url = "http://www.test.com/dir/filename.jpg?var1=foo#bar";
var result = parse_url.exec(url);

console.log(result);
