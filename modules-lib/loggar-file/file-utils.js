var fileUtil = (function () {
	return {
		fileSize: function (size) {
			var fileSize = parseInt(size) / 1024;
			if (fileSize > 1000) {
				return Math.round((fileSize * 100 / 1024)) / 100 + " M";
			} else {
				return Math.round(fileSize * 100) / 100 + " K";
			}
		},

		bytesToSize: function (bytes) {
			if (bytes == 0) {
				return "0MB ";
			} else {
				var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
				if (bytes == 0) return 'n/a';
				var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
				if (i == 0) return bytes + ' ' + sizes[i];
				return (bytes / Math.pow(1024, i)).toFixed(1) + sizes[i] + ' ';
			}
		}
	}
})();