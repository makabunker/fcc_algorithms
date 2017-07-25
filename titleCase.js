//return string with the first letter of each word capitalized

function titleCase(str) {
  var lowerStr = str.toLowerCase();
  var splitStr = lowerStr.split(" ");
  var joinedWordsArr = [];
  var perfectArr = [];
  for (i = 0; i < splitStr.length; i++) {
    var firstLetter = splitStr[i].charAt(0).toUpperCase();
    var otherLetters = splitStr[i].slice(1);
    var joinedWord = firstLetter + otherLetters;
    joinedWordsArr.push(joinedWord);
    perfectArr = joinedWordsArr.join(" ");
  }
  return perfectArr;
}

titleCase("I'm a lttle tea pot");
