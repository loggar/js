var rs = (v) => console.log("resolve:" + v),
  rj = (v) => console.log("reject:" + v);

function fn_pormise(param) {
  console.log("fn_pormise with param:" + param);
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

fn_pormise(0).then(rs, rj);
fn_pormise(1).then(rs, rj);
fn_pormise(2).then(rs, rj);