// namespace (our namespace name) and undefined are passed here
// to ensure 1. namespace can be modified locally and isn't
// overwritten outside of our function context
// 2. the value of undefined is guaranteed as being truly
// undefined. This is to avoid issues with undefined being
// mutable pre-ES5.
 
;(function ( namespace, undefined ) {
 
  // private properties
  var foo = "foo",
      bar = "bar";
 
  // public methods and properties
  namespace.foobar = "foobar";
 
  namespace.say = function ( msg ) {
    speak( msg );
  };
 
  namespace.sayHello = function () {
    namespace.say( "hello world" );
  };
 
  // private method
  function speak(msg) {
    console.log( "You said: " + msg );
  };
 
  // check to evaluate whether "namespace" exists in the
  // global namespace - if not, assign window.namespace an
  // object literal
 
})( window.namespace = window.namespace || {} );
 
 
// we can then test our properties and methods as follows
 
// public
 
// Outputs: foobar
console.log( namespace.foobar );
 
// Outputs: You said: hello world
namespace.sayHello();
 
// assigning new properties
namespace.foobar2 = "foobar";
 
// Outputs: foobar
console.log( namespace.foobar2 );