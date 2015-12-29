//   2.  Generates an incresing pattern of traingles

var traingleHeight = 6;
var str = "";
for (var i = 0; i < traingleHeight; i++){
  str = "";
  for (var j = 0; j < i; j++){
  str = str + "*";
  }
  console.log(str);
}
