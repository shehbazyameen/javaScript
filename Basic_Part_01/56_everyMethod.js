//every method
//return boolean
//check every elements
//then return true or false

//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// every((element, index, array) => { /* … */ })

//Example

const array1 = [10, 30, 30, 20, 10, 10];

const MyFnc = array1.every((a, b, c) => {
  return a % 2 === 0;
});

console.log(MyFnc);

///Example 3

let array12 = [12, 5, 8, 130, 44];
let array23 = [12, 54, 18, 130, 44];

function isBigEnough(element, index, array) {
  return element >= 10;
}
let res1 = array12.every(isBigEnough); // false
let res2 = array23.every(isBigEnough); // true

console.log(res1, res2);
