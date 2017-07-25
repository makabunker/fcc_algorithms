//remove all indicated elements from an array


function destroyer(arr) {
  // Remove all the values
  var firstArr = arguments[0];
  var modifiedArr;
  var nums = [];
  for (i = 1; i < arguments.length; i++) {
    nums.push(arguments[i]);
  }
  for (i = 0; i < nums.length; i++) {

    firstArr = firstArr.filter(function(val) {
      return val != nums[i];
    });
  }

  return firstArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
