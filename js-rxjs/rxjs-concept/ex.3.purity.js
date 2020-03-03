// What makes RxJS powerful is its ability to produce values using pure functions. That means your code is less prone to errors.
// Normally you would create an impure function, where other pieces of your code can mess up your state.
/*
let count = 0;
document.addEventListener('click', () => console.log(`Clicked ${++count} times`));
*/

// Using RxJS you isolate the state.

import { fromEvent } from "rxjs";
import { scan } from "rxjs/operators";

fromEvent(document, "click")
  .pipe(scan(count => count + 1, 0))
  .subscribe(count => console.log(`Clicked ${count} times`));
