/*Unhandled Rejected Promises*/
// nodejs
process.on('unhandledRejection', (reason) => {
  console.log('Reason: ' + reason);
});
// browser
/*
  window.addEventListener('unhandledrejection', event => {
    // Can prevent error output on the console:
    event.preventDefault();

    // Send error to log server
    log('Reason: ' + event.reason);
});
*/


var rs = () => console.log("resolved"),
  rj = (v) => {
    console.log("reject:" + v);
    return Promise.reject(v);
  },
  errHandler = (e) => console.log("error:" + e);

function fn_pormise(param) {
  console.log("fn_pormise with param: " + param);
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      var result = param ? true : false;
      if (result) {
        resolve();
      } else {
        reject(result);
      }
    }, 500);
  });
}

var p1 = fn_pormise(1),
  p2 = fn_pormise(0),
  p3 = fn_pormise(2);

p1.then(p2, rj)
.then(p3, rj)
.catch(errHandler);