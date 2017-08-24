var controller = {
	makeRequest: function () {
		var self = this;

		btn.addEventListener("click", function () {
			// ..
			self.makeRequest();
		}, false);
	}
};
controller.makeRequest();

var controller = {
	makeRequest: function () {
		btn.addEventListener("click", () => {
			// ..
			this.makeRequest();
		}, false);
	}
};
controller.makeRequest();


var controller = {
	makeRequest: () => {
		// ..
		this.helper();
	},
	helper: () => {
		// ..
	}
};
controller.makeRequest();