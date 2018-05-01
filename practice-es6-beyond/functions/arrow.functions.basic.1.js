// Before: 
var filtered = items.filter(function(item) {
	return item.enabled === true;
  });
  
  // After:
  var filtered = items.filter((item) => {
	return item.enabled === true;
  });
  
  // Even better:
  var filtered = items.filter(item => item.enabled === true);