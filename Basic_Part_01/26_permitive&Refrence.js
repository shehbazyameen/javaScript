//primitive vs reference data types in javascript

// 1 // Primitive Values
// number
// string
// boolean
// undefined
// null
// symbol

// 2 // Reference Values
// objects
// arrays
// functions
// collections
// dates
// anything that is "typeof" "object"

//
/// example  Primitive Values
//

// concept of stack and heap
//Stack: It is a data structure used to store static data.
//Heap: It is used to store objects and functions in JavaScript.

let num1 = 3;
let num2 = num1;
console.log(num1);
console.log(num2);
num1++;
console.log("after add the element");
console.log(num1);
console.log(num2);

///
/// example  Reference Values
//

let array1 = ["item1", "item2"];
let array2 = array1;
console.log(array1);
console.log(array2);
array1.push("item3");
console.log("after pushing the element");
console.log(array1);
console.log(array2);
