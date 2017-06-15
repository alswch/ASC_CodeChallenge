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

// function reverseArray(num) {
//   // console.log("==reverseArray==");
//   // empty array to store the digits
//   var array = [];
//   console.log(array);
//   // set a for loop that decrement from the highest index position
//   for (var i = num.length; i > 0; i--) {
//     array.push(num[i]);
//   }
// }
// reverseArray();
// console.log(reverseArray(345678));


// Fibonacci number is the sum of the previous two sequence numbers.
// Below is an example of the sequence 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, … Notice the sequence pattern is the sum of the previous two numbers?
// Build a function to illustrate how to get this sequence to output. If you don’t know where to begin start with pseudo code to work through the steps

function fibonacci(i) {
  // console.log("==fibonacci==");
  // setting the variables for the starting numbers: 0 and 1
  var x = 3, y = 2, num;
  while (i >= 0) {
    num = x;
    console.log("num:", num);
    x = x + y;
    console.log("x", x);
    y = num;
    console.log("x:", x);
    console.log("num:", num);
    i--;
  }
  return y;
}
fibonacci(1);


// Write a function called checkCoupon to verify that a coupon is valid and not expired. If the coupon is good, return true. Otherwise, return false. A coupon expires at the END of the expiration date. All dates will be passed in as strings in this format: "June 15, 2014"

function checkCoupon(coupon) {
// console.log("==checkCoupon==");
// set a limit to the expiration date of the coupon
var expirationDate = new Date(coupon);
expirationDate.setHours(23);
expirationDate.setMinutes(59);
expirationDate.setSeconds(59);
// checking if the coupon's date exceeds the END of the date by setting a limit for day (hour, minute, seconds)
  if (expirationDate > new Date()) {
    return false;
  } else {
    return true;
  }

}
// checkCoupon();
console.log(checkCoupon("June 9, 2017"));


// Write a function to test whether a given input is a valid email address. For the purposes of this assessment, here is what makes a valid email: At least one letter character at the beginning All characters between the first character and the @ (if any) must be letters, numbers, or underscores There must be an @ character (after the points listed just now) After the @ character, there must be at least one word character (letter, number, or underscore) or hyphen The email must end with at least one set of a dot followed by one or more word characters. The input must NOT be case-sensitive The function should return true or false.














//
