//remove all falsy values from an array


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var trueArr = arr.filter(function(val) {
    if (val) {
      return val;
    }
  });
  return trueArr;
}

bouncer([7, "ate", "", false, 9]);
