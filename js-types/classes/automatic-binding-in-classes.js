/*
We can use ES6 arrow notation in class methods, and by doing so binding is implied.
This will often save several lines of code in our class constructor, and we can happily
say goodbye to repetitive expressions such as this.myMethod = this.myMethod.bind(this)
*/

import React, { Component } from React;
export default class App extends Compononent {
  constructor(props) {
  super(props);
  this.state = {};
  }
myMethod = () => {
    // This method is bound implicitly!
  }
render() {
    return (
      <>
        <div>
          {this.myMethod()}
        </div>
      </>
    )
  }
};