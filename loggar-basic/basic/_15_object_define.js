/** module logger */ var logger={fn_logging_tool:null,prefix_debug:"[DEBUG] ",prefix_err:"[ERROR] ",typeof_logTarget:"",debug:function(c){this.typeof_logTarget=typeof c||"";this.str_debug=""+this.prefix_debug;this.str_debug=this.str_debug+this.typeof_logTarget+" "+c;if(this.typeof_logTarget=="object")this.str_debug+=" "+function(a){var b="{";for(prop_or_index in a)b+=(prop_or_index+":"+a[prop_or_index]+", ");return b.substring(0,b.length-2)+"}"}(c);this.fn_logging_tool(this.str_debug);return},error:function(e){this.fn_logging_tool(this.prefix_err+e);return}};logger.fn_logging_tool=logger.fn_logging_tool||console.log;

/* jshint ignore:start */
/* test 1 */
var a = new Object();
a.name = "name";
a.age = 30;
a.increaseAge = function(){return ++this.age;};

logger.debug(a.increaseAge());


/* test 2 */
var b = {
		name: "name",
		age: 30,
		increaseAge: function(){return ++this.age;}
};

logger.debug(b.increaseAge());


/* test 3 */
function Person(name, age) {
	this.name = name||"name";
	this.age = age||30;
	this.increaseAge = function(){return ++this.age;};
}

var c = new Person();
logger.debug(c);
logger.debug(c.increaseAge());

var d = new Person("otherPerson", 60);
logger.debug(d);
logger.debug(d.increaseAge());
logger.debug(d.increaseAge());


/* test 4 */
var e = Object.create(a);
logger.debug(e);
logger.debug(e.increaseAge());
logger.debug(e.increaseAge());

logger.debug(a.increaseAge());