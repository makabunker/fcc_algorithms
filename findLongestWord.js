//return longest word in any string
function findLongestWord(str) {
  var splitStr = str.split(" ");
  var strLengthArr = splitStr.map(function(val) {
    return val.length;
  });
  strLengthArr.sort(function(a,b){
    return b - a;
  });
  return strLengthArr[0];
}

findLongestWord("The quick brown fox jumped over the lazy dog");
