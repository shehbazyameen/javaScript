//for loop in array
//loop means iteration

// programme 1

let fruits1 = ["apple", "mango", "grapes", "banana"];
for (let i = 0; fruits1.length > i; i++) {
  console.log(fruits1[i]);
}

// programme 2
//push value in new array

let newArray = [];
let fruits = ["apple", "mango", "grapes", "banana"];
for (let i = 0; fruits.length > i; i++) {
  newArray.push(fruits[i]);
}
console.log(newArray);
