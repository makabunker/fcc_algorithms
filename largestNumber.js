//returns array of largest number from each array passed into function


function largestOfFour(arr) {
  // You can do this!
  var largestNumArr = [];
  for (i = 0; i < arr.length; i++) {
    var sortedSubArr = arr[i].sort(function(a,b) {
      return b - a;
    });
    largestNumArr.push(sortedSubArr[0]);
  }
  return largestNumArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
