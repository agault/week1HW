
var fs = require("fs");
var myArgs = process.argv.slice(2)
console.log("args: ", myArgs);

// Asynchronous - Opening File
console.log("Go fetch");
fs.readFile(myArgs[0], 'utf8', function(err, data) {
   if (err) {
      return console.error(err);
   }
  console.log(data);
});