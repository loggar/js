/**
 * @param {string} somebody - Somebody's name.
 */
function sayHello(somebody) {
  alert("Hello " + somebody);
}

// Documenting a parameter's properties
/**
 * Assign the project to an employee.
 * @param {Object} employee - The employee who is responsible for the project.
 * @param {string} employee.name - The name of the employee.
 * @param {string} employee.department - The employee's department.
 */
Project.prototype.assign = function (employee) {
  // ...
};

// Documenting a destructuring parameter
/**
 * Assign the project to an employee.
 * @param {Object} employee - The employee who is responsible for the project.
 * @param {string} employee.name - The name of the employee.
 * @param {string} employee.department - The employee's department.
 */
Project.prototype.assign = function ({ name, department }) {
  // ...
};

// Documenting properties of values in an array
/**
 * Assign the project to a list of employees.
 * @param {Object[]} employees - The employees who are responsible for the project.
 * @param {string} employees[].name - The name of an employee.
 * @param {string} employees[].department - The employee's department.
 */
Project.prototype.assign = function (employees) {
  // ...
};

// An optional parameter (using JSDoc syntax)
/**
 * @param {string} [somebody] - Somebody's name.
 */
function sayHello(somebody) {
  if (!somebody) {
    somebody = "John Doe";
  }
  alert("Hello " + somebody);
}

// An optional parameter (using Google Closure Compiler syntax)
/**
 * @param {string=} somebody - Somebody's name.
 */
function sayHello(somebody) {
  if (!somebody) {
    somebody = "John Doe";
  }
  alert("Hello " + somebody);
}

// An optional parameter and default value
/**
 * @param {string} [somebody=John Doe] - Somebody's name.
 */
function sayHello(somebody) {
  if (!somebody) {
    somebody = "John Doe";
  }
  alert("Hello " + somebody);
}

// Allows one type OR another type (type union)
/**
 * @param {(string|string[])} [somebody=John Doe] - Somebody's name, or an array of names.
 */
function sayHello(somebody) {
  if (!somebody) {
    somebody = "John Doe";
  } else if (Array.isArray(somebody)) {
    somebody = somebody.join(", ");
  }
  alert("Hello " + somebody);
}

// Allows any type
/**
 * @param {*} somebody - Whatever you want.
 */
function sayHello(somebody) {
  console.log("Hello " + JSON.stringify(somebody));
}

// Allows a parameter to be repeated
/**
 * Returns the sum of all numbers passed to the function.
 * @param {...number} num - A positive or negative number.
 */
function sum(num) {
  var i = 0,
    n = arguments.length,
    t = 0;
  for (; i < n; i++) {
    t += arguments[i];
  }
  return t;
}

// Parameters that accept a callback
/**
 * This callback type is called `requestCallback` and is displayed as a global symbol.
 *
 * @callback requestCallback
 * @param {number} responseCode
 * @param {string} responseMessage
 */

/**
 * Does something asynchronously and executes the callback on completion.
 * @param {requestCallback} cb - The callback that handles the response.
 */
function doSomethingAsynchronously(cb) {
  // code
}
