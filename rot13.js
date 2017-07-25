//ROT13 cipher


function rot13(str) { // LBH QVQ VG!

  var unicodeNums = [];
  var translation = "";
  var translatedArr = [];

  for (i = 0; i < str.length; i++) {
    var currentChar = str.charCodeAt(i);
    if (currentChar >= 65 && currentChar <= 90) {
      if (currentChar <= 77) {
        currentChar += 13;
      } else {
        currentChar -= 13;
      }
    }
    unicodeNums.push(currentChar);
    translatedArr.push(String.fromCharCode(unicodeNums[i]));
  }
  translation = translatedArr.join('');
  return translation;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
