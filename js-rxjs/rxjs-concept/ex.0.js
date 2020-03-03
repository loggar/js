// document.addEventListener('click', () => console.log('Clicked!'));

// Using RxJS you create an observable instead of event listeners.

import { fromEvent } from "rxjs";

fromEvent(document, "click").subscribe(() => console.log("Clicked!"));
