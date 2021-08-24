// let's extend the namespace with new functionality
(function( namespace, undefined ) {
 
  // public method
  namespace.sayGoodbye = function () {
    namespace.say( "goodbye" );
  }
})( window.namespace = window.namespace || {});
 
// Outputs: goodbye
namespace.sayGoodbye();