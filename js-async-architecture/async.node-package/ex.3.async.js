import async from "async";
import fs from "fs";

/* fs.stat and the whole Node.js FS API is a great example of asynchronous methods */
async.map(["file1", "file2", "file3"], fs.stat, (err, results) => {
  results; // array of files stats
});
