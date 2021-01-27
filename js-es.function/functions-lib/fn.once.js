function once(fn) {
  let called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}

function launchRocket() {
  console.log("The rocket has been launched.");
}

const launchRocketOnce = once(launchRocket);

launchRocketOnce();
launchRocketOnce();
launchRocketOnce();
