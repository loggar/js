var w = window.open("smallwin.html", "smallwin", "width=400,height=350,status=yes,resizable=yes");
w.alert("About to visit http://example.com"); // Call its alert() method
w.location = "http://example.com"; // Set its location property
w.opener !== null; // True for any window w created by open()
w.open().opener === w; // True for any window w

w.close();
window.close();