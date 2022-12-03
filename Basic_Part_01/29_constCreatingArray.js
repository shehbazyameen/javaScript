// use const for creating array
//use const always
//heap memory ['apple','mango] //address 0x1
const fruits = ["apple", "mango"];
fruits.push("banana");
console.log(fruits);

//while loop in array

let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}
