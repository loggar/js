var show = console.log;

show(/a+/.test("blah"));
show(/^a+$/.test("blah"));

show(/cat/.test("concatenate"));
show(/\bcat\b/.test("concatenate"));



var mailAddress = /\b[\w\.-]+@[\w\.-]+\.\w{2,3}\b/;

show(mailAddress.test("kenny@test.net"));
show(mailAddress.test("I mailt kenny@tets.nets, but it didn wrok!"));
show(mailAddress.test("the_giant_sloth@gmail.com"));



var holyCow = /(sacred|holy) (cow|bovine|bull|taurus)/i;
show(holyCow.test("Sacred bovine!"));



var badWords = ["ape", "monkey", "simian", "gorilla", "evolution"];
var pattern = new RegExp(badWords.join("|"), "i");
function isAcceptable(text) {
	return !pattern.test(text);
}

show(isAcceptable("Mmmm, grapes."));
show(isAcceptable("No more of that monkeybusiness, now."));




var digits = new RegExp("\\d+");
show(digits.test("101"));
