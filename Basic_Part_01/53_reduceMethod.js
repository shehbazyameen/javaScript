//reduce
//method does not change the original array.
//initialValue dani hogi warna array ki first element ko lay ga

const number = [1, 2, 3, 4, 5, 10];
const initialValue = 2;
let my = number.reduce((accumulator, currentValue, currentIndex, array) => {
  //   console.log(accumulator, currentValue, currentIndex, array);
  //   console.log(accumulator, currentValue);
  return accumulator + currentValue;
}, initialValue);

// console.log(my);
// expected output: 25

// accumulator  +  currentValue    return
//    1                 2            3
//    3                 3            6
//    6                 4            3
//    1                 2            3

///example 2

const studentList = [
  { id: 1, name: "shehbaz", age: 23 },
  { id: 2, name: "sameer", age: 18 },
  { id: 3, name: "Ali", age: 12 },

  { id: 1, name: "shehbaz", age: 23 },
  { id: 2, name: "sameer", age: 18 },
  { id: 3, name: "Ali", age: 12 },
];

let initialVal = {};

const groupedPeople = studentList.reduce((acc, currentValue) => {
  const key = currentValue["age"];
  return { [key]: currentValue };
}, initialVal);

console.log(groupedPeople);

// {
//     23: [

//     ],
//     18: [

//     ]
// }
