/* Symbol.species Constructor Getter */ 

class MyCoolArray extends Array {
    // force `species` to be parent constructor
    static get [Symbol.species]() { return Array; }
}

var a = new MyCoolArray( 1, 2, 3 ),
    b = a.map( function(v){ return v * 2; } );

b instanceof MyCoolArray;    // false
b instanceof Array;            // true




class Foo {
    // defer `species` to derived constructor
    static get [Symbol.species]() { return this; }
    spawn() {
        return new this.constructor[Symbol.species]();
    }
}

class Bar extends Foo {
    // force `species` to be parent constructor
    static get [Symbol.species]() { return Foo; }
}

var a = new Foo();
var b = a.spawn();
b instanceof Foo;                    // true

var x = new Bar();
var y = x.spawn();
y instanceof Bar;                    // false
y instanceof Foo;                    // true
