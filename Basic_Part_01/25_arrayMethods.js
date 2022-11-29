//All methods of array

let fruits = ["apple", "mango", "grapes"];
console.log(fruits + "original array");

//push and pop
fruits.push("banana");
console.log(fruits);

//pop
//return last element
//store kr lata ha last element ko
//list may say remove kr data ha

let popFruits = fruits.pop();
console.log(popFruits + "   return last element");
console.log(fruits);

///shift and unshift

//shift
//return first element
//remove first element in array
//store first element

let shiftMethod = fruits.shift();
console.log(shiftMethod + "shift");
console.log(fruits);

//unshift
//add element in first index
//add karny pr return may us array ki length data ha

let unShiftMethod = fruits.unshift("apple");
console.log(unShiftMethod + "unShiftMethod");
console.log(fruits);
