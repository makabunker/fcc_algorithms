//print out a string x number of times


function repeatStringNumTimes(str, num) {
  // repeat after me
  var totalStr = "";
  for (i = 0; i < num; i++) {
    totalStr += str;
  }
  return totalStr;
}

repeatStringNumTimes("abc", 3);
