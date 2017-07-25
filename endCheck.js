//checks if target string ends in specific sub str


function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var targetLength = target.length;
  var strLength = str.length;
  var subStr = str.substr(-targetLength);
  if (subStr == target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");
