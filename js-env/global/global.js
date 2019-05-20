if (typeof global === 'undefined') {
  global = {
    window
  };
} else {
  // node.js
  global.window = {};
}
if (typeof global === 'undefined') {
  export { global };
} else {
  
}
