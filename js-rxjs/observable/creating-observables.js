const Rx = require('./rxjs/Rx');

// Externally produce new events.
var myObservable = new Rx.Subject();
myObservable.subscribe(value => console.log(value));
myObservable.next('foo');

// Internally produce new events.
var myObservable = Rx.Observable.create(observer => {
	observer.next('foo');
	setTimeout(() => observer.next('bar'), 1000);
});
myObservable.subscribe(value => console.log(value));
