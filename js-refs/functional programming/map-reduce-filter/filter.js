var words = ["tiger", "toast", "boat", "tumor", "track", "bridge"]
var newData = words.filter((elem) => {
	return elem.startsWith('t') && elem.endsWith('r') ? true : false;
}); // returns ["tiger", "tumor"]