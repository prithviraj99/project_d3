var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('WDI_Data.csv');

// Set the encoding to be utf8.
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
  data += chunk;
});

readerStream.on('end',function(){
  console.log("csv data read completed");
  var lines=data.split("\r\n");
  //alert(lines);
  //console.log(lines[0]);
  var result = [];
  var result1 = [];
  var result2 = [];

  var headers=lines[0].split(",");
  //headers[headers.length-1]=headers[headers.length-1].substring(0,headers[headers.length-1].length-1);
  //console.log(headers);

  for(var i = 1;i < lines.length; i++) {
    var currentline=lines[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    //  currentline[currentline.length-1]=currentline[currentline.length-1].substring(0,currentline[currentline.length-1].length-1);
    //console.log(currentline);
    //json1
    if((currentline[0]=="India") && (currentline[2]=="Arable land (% of land area)")){

      for(var j=4;j<headers.length;j++){
        var obj1={};
        obj1["year"] = headers[j];
        obj1["val"]=currentline[j];
        result.push(obj1);

      }

      var json1=JSON.stringify(result);
      console.log(json1);
      //console.log(obj1);
      // Create a writable stream
      var writerStream = fs.createWriteStream('output.txt');

      // Write the data to stream with encoding to be utf8
      writerStream.write(json1,'UTF8');

      // Mark the end of file
      writerStream.end();

      // Handle stream events --> finish, and error
      writerStream.on('finish', function() {
        console.log("json1 file completed.");
      });

      writerStream.on('error', function(err){
        console.log(err.stack);
      });
    }
    //json2
    if((currentline[0]=="India") && (currentline[2]=="Arable land (hectares per person)")){

      for(var j=4;j<headers.length;j++){
        var obj2={};
        obj2["year"] = headers[j];
        obj2["val"]=currentline[j];
        result1.push(obj2);

      }

      var json2=JSON.stringify(result1);
      console.log(json2);
      //console.log(obj1);
      // Create a writable stream
      var writerStream = fs.createWriteStream('output1.txt');

      // Write the data to stream with encoding to be utf8
      writerStream.write(json2,'UTF8');

      // Mark the end of file
      writerStream.end();

      // Handle stream events --> finish, and error
      writerStream.on('finish', function() {
        console.log("json2 file completed.");
      });

      writerStream.on('error', function(err){
        console.log(err.stack);
      });
    }
    //json3
    if((currentline[0]=="India") && (currentline[2]=="Arable land (hectares)")){

      for(var j=4;j<headers.length;j++){
        var obj3={};
        obj3["year"] = headers[j];
        obj3["val"]=currentline[j];
        result2.push(obj3);

      }

      var json3=JSON.stringify(result2);
      console.log(json3);
      //console.log(obj1);
      // Create a writable stream
      var writerStream = fs.createWriteStream('output2.txt');

      // Write the data to stream with encoding to be utf8
      writerStream.write(json3,'UTF8');

      // Mark the end of file
      writerStream.end();

      // Handle stream events --> finish, and error
      writerStream.on('finish', function() {
        console.log("json3 file completed.");
      });

      writerStream.on('error', function(err){
        console.log(err.stack);
      });
    }




    
  }

});

readerStream.on('error', function(err){
  console.log(err.stack);
});
