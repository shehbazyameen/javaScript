// map methods
//always return new array
//return item and index no

const numbers = [2, 3, 4, 5, 6];
const square = function (item, index) {
  return item + index;
};

const squareNumber = numbers.map((item, index) => {
  return item + index;
});
console.log(squareNumber);

//Real example

const user = [
  { unerName: "shehbaz", lastName: "yameen", age: 25 },
  { unerName: "shehbaz", lastName: "yameen", age: 25 },
];

const userDetails = user.map((item, index) => {
  return item.lastName;
});

//return new Array
console.log(userDetails);
//old array same not be change
console.log(user);
