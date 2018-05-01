var myObject = {
	"myProp": "myValue",
	"subObj": {
		"prop": "value"
	}
};

var formatted = JSON.stringify(myObject, null, 2);
console.log(formatted);

/*
The resulting JSON representation will be formatted and indented with two spaces!
*/