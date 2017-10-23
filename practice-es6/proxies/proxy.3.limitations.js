var obj = { a: 1, b: 2 },
	handlers = { .. },
	pobj = new Proxy(obj, handlers);

typeof obj;
String(obj);
obj + "";
obj == pobj;
obj === pobj