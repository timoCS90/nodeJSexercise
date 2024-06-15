let http = require("http");
let fs = require("fs");

fs.readFile("input.txt", function (err, data) {
  if (err) throw err;
  console.log(data);
});

fs.appendFile("output.txt", , function (err) {
  if (err) throw err;
  console.log("");
});
