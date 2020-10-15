/*
An use case for weak references are cache structures, because you don’t want the cache’s internal references to objects to keep these objects alive more then they should.
*/
class MyCache {
  constructor() {
    this.cache = {};
  }

  add(key, obj) {
    this.cache[key] = new WeakRef(obj);
  }

  get(key) {
    let cachedRef = this.cache[key].deref();
    if (cachedRef) return cachedRef;
    return false;
  }
}
/*
The point here is that using the WeakRef object is as simple as that.
Just remember that if you’re trying to access the object being refereced, you need to use the deref method.
And because this is a weak reference, you need to check for the return value of deref, if it’s undefined it means the object is no longer alive, otherwise you caan safely use it (hence the IF check in the get method.
*/
