var fs = require('fs');

//get the filename from the command line
var fileName = process.argv[2];

//read contents of the file
var fileContents = fs.readFileSync(fileName).toString();

//get number of new lines
var numOfNewLines = fileContents.split('\n').length - 1;
console.log(numOfNewLines);

