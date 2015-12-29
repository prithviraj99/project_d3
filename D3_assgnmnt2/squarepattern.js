//   1.  Generates a square pattern

var squarelength = 5;
var str = "";
for (var i = 0; i < squarelength; i++){
  str = "";
  for (var j = 0; j < squarelength; j++){
  str = str + "*";
  }
  console.log(str);
}
