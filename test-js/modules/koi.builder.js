/**
 * @Module html module builders
 * @version 1.1 charly.lee
 * @Desc bulider.build();
 * 
 * <pre>
 *     &lt;input id=&quot;id&quot; attributeName /&gt;
 * </pre>
 */
var koiDatepicker = {
	build : function() {
		$("input[koiDatepicker]").each(function(index) {
			$(this).datepicker({
				autoclose : true,
				format : 'dd/mm/yyyy',
				todayHighlight : true,
				todayBtn : "linked"
			});
		});
	}
};
var koiAutoComplete = {
	build : function() {
		$("input[koiAutoComplete]").each(function(index) {
			$(this).kendoAutoComplete({
				"filter" : "contains",
				"dataTextField" : $(this).attr("id"),
				"minLength" : 3.0,
				"dataSource" : {
					"schema" : {
						"total" : "total",
						"data" : "data"
					},
					"serverFiltering" : true,
					"transport" : {
						"read" : {
							"type" : "POST",
							"contentType" : "application/json",
							"url" : "/common/autocomplete/read"
						},
						"parameterMap" : function parameterMap(options, type) {
							return JSON.stringify(options);
						}
					}
				},
				"filtering" : function(e) {
					if (!e.filter.value) {
						e.preventDefault();
					}
				}
			});
		});
	}
};