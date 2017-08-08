var modA = require( "./_03_multiple_dependencies_foo" );
var modB = require( "./_03_multiple_dependencies_bar" );
 
exports.app = function(){
    console.log( "Im an application!" );
}
 
exports.foo = function(){
    return modA.helloWorld();
}