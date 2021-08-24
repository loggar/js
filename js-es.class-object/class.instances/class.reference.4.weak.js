function Foo() {}

// strong reference to a Foo instance
const x = new Foo();

// weak reference to the Foo's instance
const xWeak = new WeakRef(x);

// strong reference to the Foo's instance
const xFromWeak = xWeak.deref();

// Why is this useful? It lets you increase the performance of the application based on the user’s device. We can use WeakRefs to cache big objects. That means that machines with more memory can see the app performance increase. Those with limited memory will still work without eating the user’s memory.
