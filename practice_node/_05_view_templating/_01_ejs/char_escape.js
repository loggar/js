var logger = require('../lib/modules/logger.winston')(__filename);

var ejs = require('ejs');
var template = "<%= message %>";
var context = {
		message: "<script>alert('XSS attack!');</script>"
};

var output = ejs.render(template, context);
logger.debug(output); // &lt;script&gt;alert(&#39;XSS attack!&#39;);&lt;/script&gt;