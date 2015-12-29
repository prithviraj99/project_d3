//  4.  Generates two adjacent triangles
var str = "";
var str1 = "";
var triangleHeight = 4;

 for (var i = triangleHeight; i > 0; i--) {
   str = "";
   for (var j = 0; j < i; j++) {
   str = str + "*";
   }
  str1 = str;
  for (var k = ( triangleHeight - i ); k < (2 * (triangleHeight -i ) ); k++){
  str1 = str1 + "  ";
  }
  str1 = str1 + str;
  console.log(str1);
}
