//reverse any string

function reverseString(str) {
  var splitArr = str.split('');
  splitArr.reverse();
  var reversedStr = splitArr.join("");
  return reversedStr;
}

reverseString("hello");
