// signature
function makeHTTPRequest(url, method, callback) {}

const convertedToPromise = new Promise((resolve, reject) => {
  makeHTTPRequest("google.com", "GET", (body, err) => {
    if (err) {
      return reject(err);
    }
    return resolve(body);
  });
});

convertedToPromise.then(res => console.log(res)); // prints response from google.com
