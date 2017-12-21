var stringUtil = {
	isNull : function(target) {
		if (!target) {
			return true;
		}
		if (typeof target === "undefined") {
			return true;
		}
		if (target === null) {
			return true;
		}
		if (typeof target === "string") {
			return (target.trim() === "");
		}
		return false;
	},
	isNotNull : function(target) {
		return !this.isNull(target);
	},
	excludeNull : function(str) {
		if (!str) {
			return "";
		} else {
			return str;
		}
	},
	removeSpace : function(str) {
		return str.replace(/\s/gi, "");
	}
};

module.exports = stringUtil;
