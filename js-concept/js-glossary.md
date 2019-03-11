# Glossary

## Asynchronous

Code is asynchronous when you initiate something, forget about it, and when the result is ready you get it back without having to wait for it. The typical example is an AJAX call, which might take even seconds and in the meantime you complete other stuff, and when the response is ready, the callback function gets called. Promises and async/await are the modern way to handle async.

## Block

In Javascript a block is delimited curly braces `{}`. An `if` statement contains a block, a `for` loop contains a block

## Block Scoping

With Function Scoping, any variable defined in a block is visible and accessible from inside the whole block, but not outside of it.

## Callback

A callback is a function that's invoked when something happens. A click event associated to an emelent has a callback function that's invoked when the user clicks the element. A fetch request has a callback that's called when the resource is downloaded.

## Declarative

A declarative approach is when you tell the machine what you need to do, and you let it figure out the details. React is considered declarative, as you reason about abstractions rather than editing the DOM directly. Every high level programming language is more declarative than a low level programming language like Assembler. Javascript is more declarative than C, HTML is delarative.

## Fallback

A fallback is used to provide a good experience when a user hasn't access to a particular functionality. For example a user that browses with Javascript disabled should be able to have a fallback to a plain HTML version of the page. Or for a browser that has not implemented an API, you should have a fallback to avoid completely breaking the experience of the user.

## Function Scoping

With Function Scoping, any variable defined in a function is visible and accessible from inside the whole function.

## Immutability

A variable, an object or array is immutable when its value cannot change after it's created. A mutable variable can be changed.

## Lexical Scoping

Lexical Scoping is a particular kind of scoping where variables of a parent function are made available to inner function as well. The scope of an inner function also includes the scope of a parent function.

## Polyfill

A polyfill is a way to provide new functionality available in modern Javascript or a modern browser API to older browsers. A pollyfill is a paricular kind of shim.

## Pure Function

A function that has no side effects (dows not modify external resources), and its output is olny determined by the arguments.

## Reassignment

Javascript with `var` and `let` declaration allows you to reassign a variable indefinitely. Whith `const` declarations you effectively declare an immutable value for functions, strings, numbers, booleans, and objects that cannot be assigned (but you can still modify it through its methods).

## Scope

Scope is the set of variables that's visible to a part of the program.

## Scoping

Scoping is the set of rules that's defined in a programming language to determine the value of a variable.

## Shim

A shim is a little wrapper around functionality, or API. It's generally used to abstract something, pre-fill parameters or add a polyfill for browsers that do not support some functionality. You can consider it like a compatiblility layer.

## Side Effect

A side effect is when a function interacts with some other function or object outside it. Interation with the network or the file system, or with th UI, are all side effects.

## State

State usually comes into play when talking about Components. A component can be stateful if it manages its own data, or stateless if it doesn't.

## Stateful

A stateful component, function or class manages its own state (data). It could store an array, a counter or anything else.

## Stateless

A stateless component, function or class is also called `dumb` because it's incapable of having own data to make decisions, so its output or presentation is entirely based on its arguments. This implies that pure functions are stateless.

## Strict Mode

Strict mode is an ECMAScript 5.1 new feature, which causes the Javascript runtime to catch moreerrors, but it helps you improve the Javascript code by denying undeclared variables and other things that might cause overlooked issues like duplicated object properties and other subtle things. Use it. The alternative is `Sloppy mode` which is not a good thing even looking at the name we gave it.

## Tree Shacking

Tree shaking means removing `dead code` from the bundle you ship to your users. If you add some code that you never use in your import statements, that's not going to be sent to the users of your app, to reduce file size and loading time.
