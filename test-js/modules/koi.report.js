var reportView = {
	reportAction : function(actionUrl, inputList) {
		var _reportReport = window.open("/report2/ready", "_blank", "width=960px,height=840px;");
		_reportReport.onload = function() {
			var form = $(_reportReport.document).find('#reportActionForm');
			form.attr("action", actionUrl);
			form.attr("method", "post");
			if (inputList) {
				for (var i = 0; i < inputList.length; i++) {
					form.append($("<input type='hidden' name='" + inputList[i].name + "' value='" + inputList[i].value + "' />"));
				}
			}
			form.submit();
		}
	},
	academicReport : function(paramMap) {
		var actionUrl = "/report2/academicReport";
		var inputList = [];
		inputList.push({
			name : "stdIdx",
			value : paramMap.stdIdx
		});
		this.reportAction(actionUrl, inputList);
	},
	completionLetter : function(paramMap) {
		var actionUrl = "/report2/completionLetter";
		var inputList = [];
		inputList.push({
			name : "stdIdx",
			value : paramMap.stdIdx
		});
		this.reportAction(actionUrl, inputList);
	},
	offerLetter : function(paramMap) {
		var actionUrl = "/report2/offerLetter";
		var inputList = [];
		inputList.push({
			name : "stdIdx",
			value : paramMap.stdIdx
		});
		inputList.push({
			name : "offerNo",
			value : paramMap.offerNo
		});
		this.reportAction(actionUrl, inputList);
	},
	application : function(paramMap) {
		var actionUrl = "/report2/application";
		var inputList = [];
		inputList.push({
			name : "stdIdx",
			value : paramMap.stdIdx
		});
		inputList.push({
			name : "applicantId",
			value : paramMap.applicantId
		});
		this.reportAction(actionUrl, inputList);
	},
	agentCompliance : function(paramMap) {
		var actionUrl = "/report2/agentCompliance";
		var inputList = [];
		inputList.push({
			name : "agentId",
			value : paramMap.agentId
		});
		inputList.push({
			name : "tnmIdx",
			value : paramMap.tnmIdx
		});
		this.reportAction(actionUrl, inputList);
	},
	agentAdvertising : function(paramMap) {
		var actionUrl = "/report2/agentAdvertising";
		var inputList = [];
		inputList.push({
			name : "agentId",
			value : paramMap.agentId
		});
		inputList.push({
			name : "anpIdx",
			value : paramMap.anpIdx
		});
		this.reportAction(actionUrl, inputList);
	},
	invoice : function(paramMap) {
		var actionUrl = "/report2/invoice";
		var inputList = [];
		inputList.push({
			name : "stdIdx",
			value : paramMap.stdIdx
		});
		inputList.push({
			name : "invoiceNo",
			value : paramMap.invoiceNo
		});
		this.reportAction(actionUrl, inputList);
	},
	payment : function(paramMap) {
		var actionUrl = "/report2/payment";
		var inputList = [];
		inputList.push({
			name : "stdIdx",
			value : paramMap.stdIdx
		});
		inputList.push({
			name : "invoiceNo",
			value : paramMap.invoiceNo
		});
		this.reportAction(actionUrl, inputList);
	},
	promissoryNote : function(paramMap) {
		var actionUrl = "/report2/promissoryNote";
		var inputList = [];
		inputList.push({
			name : "stdIdx",
			value : paramMap.stdIdx
		});
		inputList.push({
			name : "invoiceNo",
			value : paramMap.invoiceNo
		});
		this.reportAction(actionUrl, inputList);
	}
};