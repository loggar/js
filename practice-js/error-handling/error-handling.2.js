$("button").click(function () {
	$.ajax({
		url: "user.json", success: function (result) {

			try {
				updateUI(result["posts"]);
			}
			catch (e) {
				// Custom functions
				logError();
				flashInfoMessage();
			}
		}
	});
});