// object creation
let x = new Array(1000).fill(true);

// constructing the finalizer method
const cleanup = new FinalizationRegistry((key) => {
  // cleanup code should go here
});

// hooking the x variable to the finalizer
cleanup.register(x, "fsdfs");

// object 'x' is now unreachable, finalizer callback might happen after
// object has been garbage collected
x = null;

// This feature gives you a chance to do further cleanups to help optimize your application.
// Note: This is not a place where you want to run critical code. It is a place meant to help further reduce our memory web app's footprint.
