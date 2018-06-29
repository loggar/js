function fn_pormise(param) {
  console.log("fn_pormise with param: " + param);
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      var result = param ? true : false;
      if (result) {
        resolve(result);
      } else {
        reject(Error(result));
      }
    }, 500);
  });
}

var arrParams = [1,2,3,4,0],
arrPromise = [];

for(v of arrParams) {
  arrPromise.push(fn_pormise(v));
}

Promise.all(arrPromise).then(values => {
  console.log("Promise.all resolve: " + values);
}).catch(function(reason) {
  console.log("Promise.all reject: " + reason);
});

var arrPromise2 = arrPromise.slice(0, 3);

Promise.all(arrPromise2).then(values => {
  console.log("Promise.all resolve: " + values);
}).catch(function(reason) {
  console.log("Promise.all reject: " + reason);
});
