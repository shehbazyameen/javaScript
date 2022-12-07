//for in loop
//access index number

const fruits = ["apple", "mango", "grapes", "banana"];
let fruits2 = [];
for (let index in fruits) {
  //   fruits2 += [index];
  //   console.log(fruits2[index]);
  fruits2.push(fruits[index].toUpperCase());
}

console.log(fruits2);

//for loop

let fruits3 = [];
for (let i = 0; i < fruits.length; i++) {
  fruits3.push(fruits[i]);
  //   console.log("for loop " + fruits[i]);
}

console.log(fruits3, "fruits3");
