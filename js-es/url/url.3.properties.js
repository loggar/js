const url = new URL(
  "https://sample.domain.com/blog/javascript-url-object#url-properties"
);

console.log(url.protocol); // https:
console.log(url.host); // sample.domain.com
console.log(url.pathname); // /blog/javascript-url-object
console.log(url.hash); // #url-properties
console.log(url.origin); // https://sample.domain.com
