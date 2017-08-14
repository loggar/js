/**
 * @Module Grid Control (kendo)
 * @version 1.0 charly.lee
 * 
 */
var koiGridCtrl = (function() {
	var gridUpdateMode = []; // { gridId : string, updateMode : string ("I"|"U") : (insert|update) }
	return {
		selectRow : function(grid, index) {
			try {
				if (typeof grid == "string") $("#" + grid).data("kendoGrid").select("tr:eq(" + parseInt(index) + ")");
				else grid.select("tr:eq(" + parseInt(index) + ")");
			} catch (err) {
				koiLogger.warn("fail to select grid row");
			}
		},
		setUpdateMode : function(gridId, m) {
			for (var i = 0; i < gridUpdateMode.length; i++)
				if (gridUpdateMode[i].gridId == gridId) gridUpdateMode[i].updateMode = m;
			gridUpdateMode.push({
				gridId : gridId,
				updateMode : m
			});
		},
		getUpdateMode : function(gridId) {
			for (var i = 0; i < gridUpdateMode.length; i++)
				if (gridUpdateMode[i].gridId == gridId) return gridUpdateMode[i].updateMode;
			return "";
		},
		hasValue : function(grid, k, v) {
			grid = typeof grid == "string" ? $("#" + grid).data("kendoGrid") : grid;
			if (!grid) throw Error("invalid grid object.");
			var arrModel = grid.dataSource.data();
			for (var i = 0; i < arrModel.length; i++)
				if (arrModel[i][k] == v) return true;
			return false;
		}
	}
})();
/**
 * @Module Grid builder (kendo)
 * @version 2.0 charly.lee
 * 
 */
var koiGridBuilder = (function() {
	var setting_grid = {
		pageable : true,
		scrollable : true,
		editable : false,
		resizable : true,
		selectable : true,
		sortable : false,
		navigatable : true,
		toolbar : [],
		excel : {
			fileName : "export.xlsx"
		},
		pdf : {
			allPages : true,
			avoidLinks : true,
			paperSize : "A4",
			margin : {
				top : "1cm",
				left : "1cm",
				right : "1cm",
				bottom : "1cm"
			},
			landscape : false,
			repeatHeaders : true,
			scale : 0.8,
			fileName : "export.pdf"
		}
	};
	var setting_grid_data = {
		pageSize : 0
	};
	var generateColumns = function(response) {
		var columns = response;
		return columns.map(function(col) {
			return {
				title : col.title,
				field : col.field,
				width : (!col.width) ? null : col.width + "px",
				hidden : (!col.hidden || col.hidden == "false") ? false : true
			};
		})
	};
	var generateModel = function(gridId, result, setting, fn_succ) {
		$("#" + gridId).data("kendoGrid").setDataSource(new kendo.data.DataSource({
			data : result.data,
			total : result.total,
			pageSize : (function() {
				var page_tmp = !setting || !setting.pageSize ? setting_grid_data.pageSize : setting.pageSize;
				return (!page_tmp || page_tmp < 1) ? result.total : page_tmp;
			})()
		}));
		if (!!fn_succ) fn_succ(gridId, result.data);
	};
	var generateGrid = function(gridId, response, setting) {
		var grid = {
			columns : generateColumns(response),
		};
		for ( var key in setting_grid) {
			grid[key] = !setting || !setting[key] ? setting_grid[key] : setting[key];
		}
		for ( var key in setting) {
			grid[key] = setting[key];
		}
		var kendoGrid = $("#" + gridId).kendoGrid(grid);
	};
	return {
		reqHeader : function(gridId, columnUrl, params, setting) {
			$.ajax({
				type : "POST",
				url : columnUrl,
				data : params,
				dataType : "json",
				success : function(result) {
					koiLogger.debug_ajax_res_end(gridId + " Columns ", result);
					generateGrid(gridId, result, setting);
				}
			});
		},
		reqModel : function(gridId, modelUrl, params, setting, fn_succ) {
			koiJsConsoleLogger.debug_ajax_req_start(gridId, modelUrl, params);
			overlayUtil.start(gridId);
			$.ajax({
				type : "POST",
				url : modelUrl,
				data : params,
				dataType : "json",
				success : function(result) {
					koiLogger.debug_ajax_res_end(gridId + " Model ", result);
					generateModel(gridId, result, setting, fn_succ);
					overlayUtil.end(gridId);
				},
				error : function(result) {
					koiLogger.debug_ajax_res_end(gridId + " Model ", result);
					overlayUtil.end(gridId);
				}
			});
		}
	};
})();