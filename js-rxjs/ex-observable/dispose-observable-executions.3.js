// Just like observable.subscribe resembles new Observable(function subscribe() {...}), the unsubscribe we return from subscribe is conceptually equal to subscription.unsubscribe. In fact, if we remove the ReactiveX types surrounding these concepts, we're left with rather straightforward JavaScript.

function subscribe(subscriber) {
  const intervalId = setInterval(() => {
    subscriber.next("hi");
  }, 1000);

  return function unsubscribe() {
    clearInterval(intervalId);
  };
}

const unsubscribe = subscribe({ next: x => console.log(x) });

// Later:
unsubscribe(); // dispose the resources

// The reason why we use Rx types like Observable, Observer, and Subscription is to get safety (such as the Observable Contract) and composability with Operators.
