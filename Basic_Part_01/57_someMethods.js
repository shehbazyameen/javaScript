//The some() method tests whether at least one element true in the array

//example

const array = [1, 2, 3, 4, 5, 6];

const evenFnc = (element) => {
  console.log(element % 2 === 0);
};

// array.some(evenFnc);

// console.log(array.some(evenFnc(e)));

//example

function isBiggerThan10(element, index, array) {
  return element > 10;
}

let result1 = [2, 5, 8, 1, 4].some(isBiggerThan10); // false
let result2 = [12, 5, 8, 1, 4].some(isBiggerThan10); // true

// difference between some and every

// let result1 = [2, 5, 8, 1, 4].every(isBiggerThan10); // false
// let result2 = [12, 12, 12, 12, 12].every(isBiggerThan10); // true

console.log(result1, result2);

///
