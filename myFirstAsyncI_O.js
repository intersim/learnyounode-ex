var fs = require('fs');

//get the filename from the command line
var fileName = process.argv[2];

//read contents of the file, use 2nd arg utf8 to get a string; callback function is 3rd arg
var fileContents = fs.readFile(fileName, 'utf8', function(err, data){
  //get number of new lines
  var numOfNewLines = data.split('\n').length - 1;

  //print number of new lines to console
  console.log(numOfNewLines);
  
});