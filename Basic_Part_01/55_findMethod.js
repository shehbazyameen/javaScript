//find method in array

const myString = ["Hello", "Car", "Dog", "Lion"];

function isLength(String) {
  return String === "car";
}

let ans = isLength("car");
console.log(ans);

//example 2

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// expected output: 12

// example 3

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const myResult = inventory.find((ele, index) => {
  return ele.quantity > 0;
});

console.log(myResult);
