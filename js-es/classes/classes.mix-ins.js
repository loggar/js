// Abstract subclasses or mix-ins are templates for classes.
// An ECMAScript class can only have a single superclass, so multiple inheritance from tooling classes, for example, is not possible.
// The functionality must be provided by the superclass.

// A function with a superclass as input and a subclass extending that superclass as output can be used to implement mix-ins in ECMAScript:

let calculatorMixin = Base =>
  class extends Base {
    calc() {}
  };

let randomizerMixin = Base =>
  class extends Base {
    randomize() {}
  };

// A class that uses these mix-ins can then be written like this:

class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}
