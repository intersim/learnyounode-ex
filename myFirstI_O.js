var fs = require('fs');

//get the filename from the command line
var fileName = process.argv[2];

//read contents of the file and convert to string
var fileContents = fs.readFileSync(fileName).toString();

//get number of new lines
var numOfNewLines = fileContents.split('\n').length - 1;

//print number of new lines to console
console.log(numOfNewLines);

