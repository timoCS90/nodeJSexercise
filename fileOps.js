let http = require("http");
let fs = require("fs");

fs.writeFile("input.txt", "test content.", function (err) {
  if (err) throw err;
  console.log("input file created");
});

fs.readFile("input.txt", "utf8", function (err, data) {
  if (err) throw err;

  let dateTime = new Date().toString();

  let modifiedContent = data + "\n" + dateTime;

  fs.writeFile("output.txt", modifiedContent, function (err) {
    if (err) throw err;

    console.log("File Saved");
  });
});
