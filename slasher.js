//return array after removing 'howMany' number of chars from the beginning


function slasher(arr, howMany) {
  // it doesn't always pay to be first
  for (i = 0; i < howMany; i++) {
    arr.shift(0);
  }
  return arr;
}

slasher([1, 2, 3], 2);
