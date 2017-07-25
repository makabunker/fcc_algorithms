//return factorial of any number

function factorialize(num) {
  var factorial = 1;
  for (i = 1; i <= num; num--) {
    factorial *= num;
  }
  return factorial;
}

factorialize(5);
