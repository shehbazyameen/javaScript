//Set (it is iterable)
//store data
//sets also have its own method
//no index-based access
//order is not guaranteed
//unique items only (no duplicates allowed)

//when use set when unique values like id or etc

const stringSet = new Set("malik");
console.log(stringSet);

///
const numbers = new Set([1, 2, 3, 3]);
console.log(numbers);

//add number in set
const user = ["item1", "item2"];
const addNumber = new Set();
addNumber.add(1);
addNumber.add(2);
addNumber.add(["item1", "item2", "item2"]);
addNumber.add(["item1", "item2"]); //different array in memory

console.log(addNumber);

//check value in set present or not
// has method return true false

if (addNumber.has(1)) {
  console.log(addNumber, "has no");
}

///check iterable
for (let element of addNumber) {
  console.log(element);
}

//no index-based access
//index nhai hota is may
for (let indexNo in addNumber) {
  console.log(indexNo, "indexNo");
}

//find unique values in array

const myArray = [1, 2, 3, 4, 5, 5, 6, 6];
const uniqueValues = new Set(myArray);
console.log(uniqueValues, "original array", myArray);

//find length

let findLength = 0;
for (let element of myArray) {
  findLength++;
}
console.log(findLength, "findLength");
