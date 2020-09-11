console.log(globalThis);

/*
globalThis contains a reference to the global object, regardless of the environment.
In the browser, the global object is the window object.
In the node environment, the global object is the global object and self in web workers.
*/
