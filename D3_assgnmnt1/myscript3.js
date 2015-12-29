var fs=require('fs');
var csv1 = fs.readFileSync('countries-continents.csv', 'utf8');
var csv2 = fs.readFileSync('WDI_Data.csv','utf-8');
var lines1= csv1.split('\n');
//console.log(lines1);
var lines2=csv2.split('\r\n');
//console.log(lines2[0]);
var result=[];
for(var i=1;i<lines2.length;i++)
{

  var currentline2=lines2[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
  for(var j=1;j<lines1.length;j++)
  {
    var currentline1=lines1[j].split(',');
    if((currentline2[0]==currentline1[0])&&(currentline1[1]=="Africa")&&(currentline2[2]=="Arable land (% of land area)"))
    {
      var obj={};
      obj["country"]=currentline2[0];
      obj["val"]=currentline2[54];
      result.push(obj);
    }
  }
}
//console.log(result.length);
var json=JSON.stringify(result);
//console.log(json);
fs.writeFileSync('output5.txt',json,'utf-8');
