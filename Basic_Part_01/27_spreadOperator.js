//how to clone array
// 1 slice //fast method
// 2 concat array
// 3 spread operator

//how to concatenate two array

// 1 //
//slice
// let array1 = ["item1", "item2", "item3"];
// let array2 = ["item1", "item2", "item3"];
// console.log(array1 === array2); //ya equal nhai hota same value pr bhi

//separate array consider kary ga heap may slice say
// let array2 = array1.slice(0);

// 2 //
//concat array
// let array1 = ["item1", "item2"];
// let array2 = [].concat(array1);
// array1.push("item3");
// console.log(array1 === array2);
// console.log(array1);
// console.log(array2);

// 3 //
//spread operator
// let array1 = ["item1", "item2"];
// let array2 = [...array1];

// array1.push("item3");
// console.log(array1 === array2);

// console.log(array1);
// console.log(array2);

///
//testing 1
///
//Test add items in array using concat

// let array1 = ["item1", "item2"];
// let array2 = [].concat(array1, ["item3", "item4"]);
// console.log(array1 === array2);
// console.log(array1);
// console.log(array2);

///
//testing 2
///
//Test add items in array using spread operator

let array3 = ["item4", "item5"];
let array1 = ["item1", "item2"];
let array2 = [...array1, "item3", ...array3];
console.log(array1 === array2);
console.log(array1);
console.log(array2);
