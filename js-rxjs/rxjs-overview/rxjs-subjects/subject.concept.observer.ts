// Since a Subject is an Observer, this also means you may provide a Subject as the argument to the subscribe of any Observable, like the example below shows:

import { Subject, from } from "rxjs";

const subject = new Subject<number>();

subject.subscribe({
  next: v => console.log(`observerA: ${v}`)
});
subject.subscribe({
  next: v => console.log(`observerB: ${v}`)
});

const observable = from([1, 2, 3]);

observable.subscribe(subject); // You can subscribe providing a Subject
