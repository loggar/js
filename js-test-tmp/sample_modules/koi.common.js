var koiStaticUrls = {
	error_auth : "/error_auth",
	server_not_working : "/static/html/server_not_working.html"
};
var locationUtil = {
	isLocal : function() {
		return (location.hostname && location.hostname.indexOf("localhost") >= 0);
	},
	isTest : function() {
		if (!location.hostname) return false;
		return location.hostname.indexOf("teststaff") == 0 || location.hostname.indexOf("teststudents") == 0 || location.hostname.indexOf("testlecture") == 0 || location.hostname.indexOf("testagent") == 0;
	},
	isNotProduct : function() {
		return (locationUtil.isLocal() || locationUtil.isTest());
	},
	isProduct : function() {
		return (!locationUtil.isLocal() && !locationUtil.isTest());
	}
};
/**
 * @Module Logger for js console
 * @version 2.1 charly.lee
 * 
 */
var koiJsConsoleLogger = (function() {
	var KOI_DEBUG_MODE = false;
	return {
		enable : function() {
			return KOI_DEBUG_MODE;
		},
		setMode : function(mode) {
			if (mode) KOI_DEBUG_MODE = true;
			else KOI_DEBUG_MODE = false;
		},
		debug_ajax_req_start : function(id, url, params) {
			if (KOI_DEBUG_MODE) console.log("<REQ> " + id + ", " + url + ' ' + JSON.stringify(params, ' '));
		},
		debug_ajax_res_end : function(id, jqXHR) {
			if (KOI_DEBUG_MODE) console.log("<RES> " + id + ' ' + JSON.stringify(jqXHR, ' '));
		},
		debug : function(obj) {
			if (KOI_DEBUG_MODE) console.log("<DEBUG> " + JSON.stringify(obj, ' '));
		},
		error : function(obj) {
			console.log("<ERROR> " + JSON.stringify(obj, ' '));
		},
		warn : function(obj) {
			console.log("<WARN> " + JSON.stringify(obj, ' '));
		}
	};
})();
var koiLogger = (function() {
	if (locationUtil.isLocal()) koiJsConsoleLogger.setMode(true);
	else koiJsConsoleLogger.setMode(false);
	return koiJsConsoleLogger;
})();
/**
 * @Module StringUtil
 * @version 1.2 charly.lee
 */
var stringUtil = {
	isNull : function(target) {
		if (!target) return true;
		if (typeof target == "undefined") return true;
		if (target == null) return true;
		if (typeof target == "string") {
			if (target.trim().toLowerCase() == "null") return true;
			return (target.trim() == "");
		}
		return false;
	},
	isNotNull : function(target) {
		return !this.isNull(target);
	},
	excludeNull : function(str) {
		if (!str) return "";
		else return str;
	},
	removeSpace : function(str) {
		return str.replace(/\s/gi, "");
	}
};
/**
 * @Module numberUtil
 * @version 1.0 charly.lee
 */
var numberUtil = {
	toFormatCurrency : function(target, minFracDigit, maxFracDigit) {
		var minFractionDigits = minFracDigit || 2;
		var maxFractionDigits = maxFracDigit || 2;
		if (minFractionDigits > maxFractionDigits) minFractionDigits = maxFractionDigits;
		var formatter = new Intl.NumberFormat('en-AU', {
			// style : 'currency',
			// currency : 'AUD',
			minimumFractionDigits : minFractionDigits,
			maximumFractionDigits : maxFractionDigits
		});
		return formatter.format(target);
	}
};
/**
 * @Module dateUtil
 * @version 1.0 charly.lee
 */
var dateUtil = {
	toFormatDate : function(d) {
		d = d || new Date();
		var d_day = d.getDate();
		var d_mon = d.getMonth() + 1;
		var d_year = d.getFullYear();
		return (d_day < 10 ? "0" + d_day : d_day) + "/" + (d_mon < 10 ? "0" + d_mon : d_mon) + "/" + d_year;
	}
};
/**
 * @Module koi Utilities
 * @version charly.lee
 */
var koiTrimesterUtil = (function() {
	var fn_order = function(t) {
		if (typeof t !== "string" || t.length !== 4) throw Error("invalid arg t:" + t);
		return t.substr(t.length - 2, 2) + t.substr(0, 2);
	}
	return {
		compare : function(t1, t2) {
			if(!t1) throw Error("invalid arg t1:" + t1);
			if(!t2) throw Error("invalid arg t2:" + t2);
			if(typeof t1 !== "string") t1 = t1.toString();
			if(typeof t2 !== "string") t2 = t2.toString();
			if (fn_order(t1) < fn_order(t2)) return -1;
			else if (fn_order(t1) === fn_order(t2)) return 0;
			else return 1;
		}
	}
})();
var KoiSubjectUtil = {
	isSbjectEdc : function(sbjId) {
		if (sbjId.substring(0, 3) == "EDC") return true;
		return false;
	}
}
var koiMailUtil = {
	deleteMailAttachedFilesByUserId : function(user_id) {
		var params = {};
		params.updUid = user_id;
		dataSource_transport("deleteMailAttachList", "/resBodyMap/admission/coeIssuance/DELETE_MAIL_ATTACH_LIST", params);
	}
};
var koiNotificationMsgbox = {
	commonNotiNotHide : function(titles, messages, type) {
		notification2.show({
			title : titles,
			message : messages
		}, type);
	},
	commonNotiNotHideClear : function() {
		notification2.hide();
	}
};
var koiModal = {
	confirmYes : function(msg, button1, succ) {
		var $confirm = $('#myModal2');
		$('#myModalLabel2').html(msg);
		if (button1 && button1.trim() != "") {
			$("#save2").html(button1);
		} else {
			$("#save2").html("OK");
		}
		$('#save2').off('click').click(function() {
			$confirm.modal('hide');
			if (succ) {
				succ();
			}
		});
		$confirm.on('shown.bs.modal', function() {
			$("#save2")[0].focus();
		})
		$confirm.modal({
			backdrop : false
		});
	}
};
var imageOverlay = {
	elementId : "imageOverlay",
	abspos : function(e) {
		this.x = e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
		this.y = e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
		return this;
	},
	invoke : function(e, src) {
		document.getElementById("bigPic").src = src;
		var ex_obj = document.getElementById(this.elementId);
		if (!e) e = window.Event;
		pos = this.abspos(e);
		ex_obj.style.left = pos.x + "px";
		ex_obj.style.top = (pos.y + 10) + "px";
		ex_obj.style.display = ex_obj.style.display == 'none' ? 'block' : 'none';
	}
};
var koiInputUtil = {
	getTrimester : function(yearId, seqId) {
		var year = $("#" + yearId).data("kendoDropDownList").value();
		var seq = $("#" + seqId).data("kendoDropDownList").value();
		if (!year || !seq || year.length != 4 || seq.length != 2) {
			return null;
		} else {
			return seq + year.substring(2);
		}
	},
	getUserId : function(id) {
		var start = -1;
		var end = -1;
		var userNm = "";
		var userId = "";
		if (!$("#" + id)) {
			return "";
		}
		if ($("#" + id).data("kendoAutoComplete")) {
			userNm = $("#" + id).data("kendoAutoComplete").value();
		} else {
			userNm = $("#" + id).val();
		}
		if (!userNm) return "";
		start = userNm.indexOf("[");
		end = userNm.indexOf("]");
		if (start < 0 || end < 0) return userNm;
		return userNm.substring(start + 1, end);
	}
};
/**
 * @Module overlay
 * @version 1.0 charly.lee
 */
var overlayUtil = (function() {
	var idPrefix = "overlayArea_";
	var eOverlay = "<i class='fa fa-refresh fa-spin'></i>";
	return {
		start : function(id) {
			$("#" + id).after("<div class='overlay' id='" + idPrefix + id + "'>" + eOverlay + "</div>");
		},
		end : function(id) {
			$("#" + idPrefix + id).remove();
		}
	};
})();
/**
 * @Module Request application/json
 * @version 2.0 charly.lee
 * 
 */
var koiData = {
	ajax : function(dst_id, dst_url, dst_params, b_overlay, msg, fn_succ) {
		if (!!b_overlay) overlayUtil.start(dst_id);
		koiJsConsoleLogger.debug_ajax_req_start(dst_id, dst_url, dst_params);
		$.ajax({
			type : 'POST',
			url : dst_url,
			dataType : 'json',
			data : dst_params
		}).done(function(data) {
			if (!!b_overlay) overlayUtil.end(dst_id);
			koiJsConsoleLogger.debug_ajax_res_end(dst_id, data);
			if (typeof ds_callback_success !== "undefined" && typeof ds_callback_success === "function") ds_callback_success(dst_id, data);
			if (!!fn_succ) fn_succ(data, (!!data.process && data.process == "success"));
			if (!!data.process && data.process == "success" && !!msg && !!msg.success) commonNoti("Success", msg.success, "success");
			if (!!data.process && data.process != "success" && !!msg && !!msg.fail) commonNoti("Error", msg.fail, "error");
		}).fail(function(data, textStatus, jqXHR) {
			if (!!b_overlay) overlayUtil.end(dst_id);
			koiJsConsoleLogger.debug_ajax_res_end(dst_id, data);
		});
	}
}
