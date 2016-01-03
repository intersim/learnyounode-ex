var fs = require('fs');

var file = process.argv[2];

fs.readFileSync('./' + file, function () {
  console.log("Just read a file!");
});