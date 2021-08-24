const taskDelayDecorator = function (resolve, ms) {
  return new Promise(function (resolve, reject) {
    return setTimeout(function () {
      resolve();
    }, ms);
  });
};

const taskPromise = function (reqIdx, id, accumulator) {
  return new Promise((resolve, reject) => {
    fetch("/url", {
      method: "POST",
      body: JSON.stringify({
        id: id,
        // ...
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        logger.info(reqIdx, "taskPromise", data);
        accumulator.push(data);
      });
  });
};

const fn_req_delete_invoice = async function (arr) {
  var ms = 500;
  var r = [];
  for (var i = 0; i < arr.length; i++) {
    await taskDelayDecorator(taskPromise(i, arr[i].id, r), ms);
  }
};
