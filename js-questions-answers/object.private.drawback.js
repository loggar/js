// What is the drawback of creating true private in JavaScript?

// One of the drawback of creating a true private method in JavaScript is that they are very memory inefficient because a new copy of the method would be created for each instance.

// Here each instance variable emp1, emp2, emp3 has own copy of increaseSalary private method.
// So as recommendation don't go for a private method unless it's necessary.

var Employee = function(name, company, salary) {
  this.name = name || ""; //Public attribute default value is null
  this.company = company || ""; //Public attribute default value is null
  this.salary = salary || 5000; //Public attribute default value is null

  // Private method
  var increaseSalary = function() {
    this.salary = this.salary + 1000;
  };

  // Public method
  this.dispalyIncreasedSalary = function() {
    increaseSalary();
    console.log(this.salary);
  };
};

// Create Employee class object
var emp1 = new Employee("John", "Pluto", 3000);
// Create Employee class object
var emp2 = new Employee("Merry", "Pluto", 2000);
// Create Employee class object
var emp3 = new Employee("Ren", "Pluto", 2500);
