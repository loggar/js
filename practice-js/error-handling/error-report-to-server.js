reportErrorToServer = function (error) {
	$.ajax({
		type: "POST",
		url: "http://api.xyz.com/report",
		data: error,
		success: function (result) { }
	});
}
// Window error event
window.addEventListener('error', function (e) {
	reportErrorToServer({ message: e.message })
});

function mainLogic() {
	// Somewhere you feel like fishy
	throw new Error("user feeds are having fewer fields than expected...");
}