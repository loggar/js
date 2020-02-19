// construct a url
const url = new URL("http://attacomsian.com");
url.pathname = "/blog/javascript-url-object";
url.hash = "#url-properties";

// update `protocol` property
url.protocol = "https:";

console.log(url.toString()); // https://attacomsian.com/blog/javascript-url-object#url-propertie
