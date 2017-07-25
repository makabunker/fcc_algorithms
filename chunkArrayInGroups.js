//take array and split it into groups of size 'size'
//return 2D array


function chunkArrayInGroups(arr, size) {
  // Break it up.
  var subArr = [];
  var brokenArr = [];
  var remainder = arr.length % size;
  var lastArr = [];

  for (i = 0; i < arr.length; i += size) {

    for (j = i; j < size + i; j++) {
      subArr.push(arr[j]);
    }

    brokenArr.push(subArr);
    subArr = [];
  }

  if (remainder !== 0) {
   lastArr = brokenArr.pop();

    for (x = 0; x < size - remainder; x++) {
     lastArr.pop();
   }

    brokenArr.push(lastArr);
  }

  return brokenArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
