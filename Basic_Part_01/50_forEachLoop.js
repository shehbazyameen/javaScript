//forEach loop
//example
const number = [2, 4, 5, 6, 7];

function multiplication(number, index) {
  console.log(number + "*" + index + "=" + number * index);
}

for (let i = 0; i < number.length; i++) {
  multiplication(number[i], i);
}
//OR
//use forEach loop same result
number.forEach(multiplication);
//OR
//anonymous function
number.forEach(function (number, index) {
  console.log(number, index);
});

//Task
const user = [
  {
    firstName: "shehbaz",
    age: 12,
  },
  {
    firstName: "Ali",
    age: 22,
  },
  {
    firstName: "bilal",
    age: 32,
  },
];

user.forEach(function (elements, index) {
  console.log(elements.firstName);
  console.log(elements.age);
});
