//return true if any alphanumeric string is a palindrome

function palindrome(str) {
  // Good luck!
  var alphaStr = str.replace(/[\W_]+/g, '').toLowerCase();
  //return alphaStr;
  var splitStr = alphaStr.split('');
  splitStr.reverse();
  var betaStr = splitStr.join('');
  if (alphaStr == betaStr) {
      return true;
  } else {
      return false;
  }
}



palindrome("eye");
