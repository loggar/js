/**
 * @Module Dropdown builder and dropdown Utilities
 * @version 1.2 charly.lee
 * 
 */
var koiDropdown = {
	build : function($obj, dst_url, dst_params, e_success, e_change) {
		if (!$obj) return false;
		if ($.type($obj) === "array" && $obj.length > 0) {
			koiLogger.warn("dropdown-object is an array, all be ignored except $obj[0]. $obj=" + $obj);
			$obj = $obj[0];
		}
		$obj.kendoDropDownList({
			optionLabel : "Select",
			dataTextField : "codeNm",
			dataValueField : "code",
			autoBind : false,
			change : e_change
		});
		$.ajax({
			type : 'POST',
			url : dst_url,
			dataType : 'json',
			data : dst_params
		}).done(function(response) {
			koiJsConsoleLogger.debug_ajax_res_end($obj.attr("id"), response);
			var dropdown = $obj.data("kendoDropDownList");
			dropdown.setDataSource(response.data);
			dropdown.dataSource.read();
			dropdown.refresh();
			if (!!e_success) e_success(response.data);
		}).fail(function(response, textStatus, jqXHR) {
			koiJsConsoleLogger.debug_ajax_res_end($obj.attr("id"), response);
		});
	},
	enable : function($obj, b) {
		if (!b) {
			$obj.data("kendoDropDownList").select(0);
			$obj.data("kendoDropDownList").enable(false);
		} else {
			$obj.data("kendoDropDownList").enable(true);
		}
	},
	readonly : function($obj, b) {
		if (!b) {
			$obj.data("kendoDropDownList").readonly(false);
		} else {
			$obj.data("kendoDropDownList").readonly();
		}
	},
	select : function($obj, v) {
		if (typeof v === "number") $obj.data("kendoDropDownList").select(v);
		else $obj.data("kendoDropDownList").value(v);
	},
	get : function($obj, key) {
		if (!!key) {
			var drop = $obj.data("kendoDropDownList");
			var drop_select = drop.select();
			if (drop_select < 1) return "";
			var item = drop.dataSource.data()[drop_select - drop.optionLabel.length];
			return (key in item) ? item[key] : "";
		} else {
			return $obj.data("kendoDropDownList").value();
		}
	},
	clear : function($obj) {
		$obj.data("kendoDropDownList").value("");
	}
};
