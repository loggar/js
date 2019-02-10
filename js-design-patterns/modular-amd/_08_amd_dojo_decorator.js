// mylib/UpdatableObservable: a Decorator for dojo/store/Observable
define(["dojo", "dojo/store/Observable"], function (dojo, Observable) {
    return function UpdatableObservable(store) {

        var observable = dojo.isFunction(store.notify) ? store :
            new Observable(store);

        observable.updated = function (object) {
            dojo.when(object, function (itemOrArray) {
                dojo.forEach([].concat(itemOrArray), this.notify, this);
            });
        };

        return observable;
    };
});


// Decorator consumer
// a consumer for mylib/UpdatableObservable

define(["mylib/UpdatableObservable"], function (makeUpdatable) {
    var observable,
        updatable,
        someItem;

    // make the observable store updatable
    updatable = makeUpdatable(observable); // `new` is optional!

    // we can then call .updated() later on if we wish to pass
    // on data that has changed
    //updatable.updated( updatedItem );
});