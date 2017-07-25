//after sorting array, return lowest index where element should be inserted


function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var sortedArr = arr.sort(function(a,b) {
    return a - b;
  });
  var index = 0;
  if (num <= sortedArr[0]) {
      return 0;
    }
  if (num >= sortedArr[sortedArr.length - 1]) {
      return sortedArr.length;
  }
  for (i = 0; i < sortedArr.length - 1; i++) {
    if (num > sortedArr[i] && num < sortedArr[i + 1]) {
      return i + 1;
    } else if (num == sortedArr[i]) {
      return i;
    } else if (num == sortedArr[i + 1]) {
      return i + 1;
    }

   }
  return "hello";
}

getIndexToIns([5, 3, 20, 3], 5);
