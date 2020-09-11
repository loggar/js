class Person {
  constructor(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
  }
}
let myP = new Person("Fernando", "Doglio");

/*
In the above context, myP will be a valid strong reference until it no longer lives.
Once all strong references to an object are eliminated, then the Garbage Collector is free to destroy that object and release its memory so it can be used for other things.
*/
