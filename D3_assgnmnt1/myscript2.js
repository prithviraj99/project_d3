var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('countries-continents.csv');

// Set the encoding to be utf8.
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
  data += chunk;
});

readerStream.on('end',function(){
  console.log("csv data read completed" )
  var lines=data.split("\n");

  var result = [];

  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

    var obj = {};
    var currentline=lines[i].split(",");

    for(var j=0;j<headers.length;j++){
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);

  }
var json=JSON.stringify(result);
  console.log(json);
  // Create a writable stream
  var writerStream = fs.createWriteStream('output3.txt');

  // Write the data to stream with encoding to be utf8
  writerStream.write(json,'UTF8');

  // Mark the end of file
  writerStream.end();

  // Handle stream events --> finish, and error
  writerStream.on('finish', function() {
    console.log("json file completed.");
  });

  writerStream.on('error', function(err){
    console.log(err.stack);
  });

});

readerStream.on('error', function(err){
  console.log(err.stack);
});
