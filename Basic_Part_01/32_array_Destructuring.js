//Array destructuring

//destructuring method 1
const arr = ["value 1", "value 2", "value 3"];
let accessValue1 = arr[0];
let accessValue2 = arr[1];
let accessValue3 = arr[2];
console.log(accessValue1);
console.log(accessValue2);
console.log(accessValue3);

//destructuring method 2
const arr2 = ["value 1", "value 2", "value 3"];
// let [value1, value2, value3] = arr2;
let [value1, , value3] = arr2;
console.log(value1);
// console.log(value2);
console.log(value3);

//destructuring Remaining Values method 3
const arr3 = ["value 1", "value 2", "value 3"];
let [val1, val2, ...mynNewRemainingValues] = arr3;
console.log("method 3", mynNewRemainingValues);

//destructuring using slice method 4
const arr4 = ["value 1", "value 2", "value 3"];
let myNewArray = arr4.slice(2);
console.log("slice", myNewArray);

//nested destructuring very important
const users = [
  { name: "shehbaz", age: 22, cast: "malik" },
  { name: "sameer", age: 20, cast: "pujabi" },
  { name: "Saeed", age: 40, cast: "gull" },
];

const [{ name: changeKeyName }, , { age }] = users;
console.log(changeKeyName, age);
