var data = ["2345-34r", "2e345-211", "543-67i4", "346-598"];
var re = /[a-z A-Z]/;
var cleanedData = data.map((elem) => { return elem.replace(re, "") });
console.log(cleanedData); // ["2345-34", "2345-211", "543-674", "346-598"]