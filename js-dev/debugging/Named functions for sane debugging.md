# Named functions for sane debugging

## named and anonymous functions

```js
// These two are anonymous functions
function() {}
() => {}

// These two are named functions
function doSomething() {}
const doSomething = () => {}
```

## with anonymous function

```js
function Page() {
  window.addEventListener('load', function() {
    console.log('Page loaded!');
    Page.init();
  });
}

function App() {
  Page();
}

App();
```

```
index.js:4 Uncaught TypeError: Page.init is not a function
    at index.js:4

(anonymous)   @ index.js:4
load (async)
Page          @ index.js:2
App           @ index.js:9
```

This is the expanded console message, and is known as a stack trace. Do you see our named functions such as Page and App? What about the event handler function from `window.addEventListener`? Ugh oh, it's "anonymous". Imagine if there were multiple anonymous functions calling other anonymous functions. That wouldn't form a useful stack trace for debugging.

## with named function

Let's fix this by adding the name `pageLoadHandler` to our function.

```js
function Page() {
  window.addEventListener('load', function pageLoadHandler() {
    console.log('Page loaded!');
    Page.init();
  });
}

function App() {
  Page();
}

App();
```

```
Uncaught TypeError: Page.init is not a function
    at pageLoadHandler (index.js:4)

pageLoadHandler @ index.js:4
load (async)
Page            @ index.js:2
App             @ index.js:9
```

Now the error message is useful even without the expanded stack trace because we can see it's coming directly from pageLoadHandler. If we were to call another function from here though, the stack trace would no longer show just `(anonymous)`.

You may still want to create anonymous functions when doing simple callbacks to array methods like `.map()` or `.filter()`, and as long as the parent functions have a name I don't see an issue with that. Being aware of how anonymous functions affect the stack trace helps you make those decisions for a sane debugging experience later on.
