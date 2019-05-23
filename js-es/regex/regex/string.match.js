var show = console.log;
var print = console.log;

show("No".match(/Yes/));
show("... yes".match(/yes/));
show("Giant Ape".match(/giant (\w+)/i));


var parenthesized = ("Something(charly)Something(LEE)").match(/\((.*)\)/);
if (parenthesized != null)
	print(parenthesized[1]);



function extractDate(string) {
	var found = string.match(/(\d\d?)\/(\d\d?)\/(\d{4})/);
	if (found == null)
		throw new Error("No date found in '" + string + "'.");
	return new Date(Number(found[3]), Number(found[2]) - 1,
		Number(found[1]));
}

show(extractDate("born 5/2/2007 (mother Noog): Long-ear Johnson"));