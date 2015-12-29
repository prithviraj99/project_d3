// 3. Generates an decresing pattern of traingles

var traingleHeight = 5;
var str = "";
 for (var i = traingleHeight; i > 0; i--){
  str = "";
  for (var j = 0; j < i; j++){
  str = str + "*";
  }
  console.log(str);
}
