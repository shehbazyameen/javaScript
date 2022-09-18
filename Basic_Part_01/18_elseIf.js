// if else if
//else

let obtainNo = +prompt("please enter your obtain No");
let TotalNo = +prompt("please enter your total marks");

let percentage = (obtainNo / TotalNo) * 100;

if (percentage >= 80) {
  console.log(percentage + " you Grade is A1");
} else if (percentage >= 79) {
  console.log(percentage + "you Grade is A");
} else if (percentage >= 69) {
  console.log(percentage + "you Grade is B");
} else if (percentage >= 59) {
  console.log(percentage + "you Grade is C");
} else if (percentage >= 49) {
  console.log(percentage + "you Grade is A");
} else if (percentage >= 39) {
  console.log(percentage + "you Grade is A");
} else {
  console.log("Fail");
}
