// **ES5**
var Person = function(first, last) {
  if (!(this instanceof Person)) {
    throw new Error("Person is a constructor function, use new with it");
  }
  this.first = first;
  this.last = last;
};

Person.prototype.personMethod = function() {
  return "Result from personMethod: this.first = " + this.first + ", this.last = " + this.last;
};

var Employee = function(first, last, position) {
  if (!(this instanceof Employee)) {
    throw new Error("Employee is a constructor function, use new with it");
  }
  Person.call(this, first, last);
  this.position = position;
};
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.personMethod = function() {
  var result = Person.prototype.personMethod.call(this);
  return result + ", this.position = " + this.position;
};
Employee.prototype.employeeMethod = function() {
  // ...
};
