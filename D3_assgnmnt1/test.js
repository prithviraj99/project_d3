
var fs1 = require('fs');
var LineByLineReader = require('line-by-line'),
    //lr = new LineByLineReader('WDI_Data.csv');
    lr = new LineByLineReader('WDI_Data.csv');
    //var lines =[];
    var heading = [];
    var words=[];
    var count=0;
    var flag=0;
    //var store_data="[";

    var json=[];

    // fs1.appendFile("./test.txt",store_data, function(err) {
    //   if(err) {
    //       return console.log(err);
    //   }
    //
    //   //console.log("The file was saved!:"+count++);
    // });

lr.on('error', function (err) {
	// 'err' contains error object
  console.log(err);
});

lr.on('line', function (line) {
	// 'line' contains the current line without the trailing newline character.
  //console.log(line[0]);
  if(flag==0)
  {
    heading = line.split(',');                                                  //spliting the heading part
    flag=1;
    /*for(var j=0;j<heading.length;j++)
    {
      console.log(heading[j]);
    }*/
  }
  else
  {
        var words = line.split(',');

        var k=0;
        //var flag=1;
        var temp_str="";
        for(var j=0;j<words.length;j++)                                              //traversing  the completeing the word
        {
          //console.log(words[j]);
          if(words[j].charAt(0)=='"')                                                 //if any word's first letter is "
          {
            //console.log("yuppie i found one");
            k=0;
            temp_str=words[j]
            do
            {
              k++;
              temp_str=temp_str.concat(words[j+k]);
            } while(words[j+k].charAt(words[j+k].length-1)!='"')
            //console.log(temp_str);
            words[j]=temp_str;
            words[j] = words[j].replace('"','');
            words[j] = words[j].replace('"','');
            for(var m=j+1;m<words.length-k;m++)
            {
              words[m]=words[m+k];
            }

            for(var m=0;m<k;m++)
            {
              words.pop();
            }

          }
        }

        //console.log(words.length);
        //store_data="{";
        var obj = {};
        for(var i=0;i<words.length;i++)
        {
          if(words[i]!="" && (heading[i]=="Country Name" || heading[i]=="2005"))
          {
            //store_data = store_data+('"'+ heading[i] + '"' + ":" + '"' + words[i] + '"');
            //if(heading[i]=="Country Name")
            //{
            //  store_data = store_data;
            //}

            obj[heading[i]]=words[i];
          }

        }
        //store_data.
        //store_data=store_data+'},'+'\r\n';

        json.push(obj);

                                                       //function for writing the data to the file

  }
  /*for(var r=0;r<heading.length;r++)
  {
    console.log(heading[r]);
  }*/



});

lr.on('end', function () {
	// All lines are read, file is closed now.
  // fs1.appendFile("./test.txt","]", function(err) {
  //   if(err) {
  //       return console.log(err);
  //   }
  //
  //   //console.log("The file was saved!:"+count++);
  // });

  fs1.appendFile("./test.txt", JSON.stringify(json) , function(err) {
    if(err) {
        return console.log(err);
    }

    //console.log("The file was saved!:"+count++);
  });

});



//arr = arr || [];
// this will prevent JS from throwing an error in
// the below loop when there are no matches
//for (var i = 0; i < arr.length; i++) console.log('arr['+i+'] =',arr[i]);
