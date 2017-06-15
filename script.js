// write a function named stringy that takes a size and returns a string of alternating '1s' and '0s'. the string should start with a 1. a string with size 6 should return :'101010'. with size 4 should return : '1010'. with size 12 should return : '101010101010'. The size will always be positive and will only use whole numbers.

function stringy(size) {
  // console.log("==stringy==");
  // empty variable named string that will store the strings
  var string = "";
  // for loop couting the string's index within the size
  // determines the string's index according to the remainder of i divded by 2
  for (var i = 0; i < size; i++) {
    // even index has 0 remainder. prints 1
    if (i % 2 == 0) {
      string += "1";
    // if not, print 0, which the odd index has remainder of 1
    } else {
      string += "0";
    }
  }
  // return the value back to string above
  return string;
}
stringy();
console.log(stringy(10));


// Given a non-negative(positive) integer, return an array containing a list of independent digits in reverse order. Example: 348597 => [7,9,5,8,4,3]

function reverseArray(i) {
  // console.log("==reverseArray==");
  num = [];
  console.log(num);
  for (var i = 0; i < num.length; i--) {
    num.push(num[i])
  }
}
reverseArray();






















//
