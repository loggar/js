class Person {
  constructor(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.sibling = null;
  }
}
let me = new Person("Fernando", "Doglio");
let sibling = new Person("My", "Sibling");
me.sibling = sibling;
sibling.sibling = me;

/*
both objects are referencing each other, so even when both the me and sibling variables are left out of scope and thus, de-referenced, internally each object holds a strong reference for the other.
In practice this means these objects will never be collected.
*/
