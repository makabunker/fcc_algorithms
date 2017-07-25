//truncate at string str num number of times


function truncateString(str, num) {
  // Clear out that junk in your trunk
  var ellipse = "...";
  if (num <= 3) {
    return str.slice(0, num) + ellipse;
  } else if (num >= str.length) {
    return str;
  } else {
    num -= 3;
    return str.slice(0, num) + ellipse;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
