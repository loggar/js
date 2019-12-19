/*
Because Observable Executions may be infinite, and it's common for an Observer to want to abort execution in finite time, we need an API for canceling an execution. Since each execution is exclusive to one Observer only, once the Observer is done receiving values, it has to have a way to stop the execution, in order to avoid wasting computation power or memory resources.

When observable.subscribe is called, the Observer gets attached to the newly created Observable execution. This call also returns an object, the Subscription:
*/

/*
const subscription = observable.subscribe(x => console.log(x));
*/

// The Subscription represents the ongoing execution, and has a minimal API which allows you to cancel that execution. Read more about the Subscription type here. With subscription.unsubscribe() you can cancel the ongoing execution:

import { from } from "rxjs";

const observable = from([10, 20, 30]);
const subscription = observable.subscribe(x => console.log(x));
// Later:
subscription.unsubscribe();
