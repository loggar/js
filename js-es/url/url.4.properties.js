// construct a url
const url = new URL("http://sample.domain.com");
url.pathname = "/blog/javascript-url-object";
url.hash = "#url-properties";

// update `protocol` property
url.protocol = "https:";

console.log(url.toString()); // https://sample.domain.com/blog/javascript-url-object#url-propertie
