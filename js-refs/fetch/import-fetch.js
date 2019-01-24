var org_fetch = fetch;
var fetch = fetch;

// node-process: use node-fetch
if (!org_fetch && typeof module !== "undefined" && module.exports) {
  fetch = require("node-fetch");
}
console.log("fetch", typeof fetch);
console.log("fetch === org_fetch", fetch === org_fetch);
