//take two arrays and compare the contents
//return a new array with any element that is only in one of the two original arrays

function diffArray(arr1, arr2) {
  var newArr = [];
  for (i = 0; i < arr1.length; i++) {
    var idx = arr2.indexOf(arr1[i]);
    if (idx >= 0) {
      arr2.splice(idx, 1);
    } else if (idx === -1) {
      newArr.push(arr1[i]);
    }
  }
  newArr = newArr.concat(arr2);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["a", "b", "c"], ["a", "c", "d"]);
