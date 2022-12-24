//sort method
//original array change
//as a string sort karta ha
//string ko sort karny k liya ascii code dakhat ha
//character ko check karta ha us ko ascending may kary ga
//no ko sort nha karta ha
//capital ko first q k ascii start say hoti ha start

const number = [2, 3, 4, 1200, 7, 4, 6, 8, 1000, 5];
const myString = ["malik", "abcd", "shehbaz", "Abcd"];

let sortingArray = number.sort();
let sortingString = myString.sort();

console.log(sortingArray);
console.log(sortingString);

//Real Example Desired

const myRealNumbe = [3, 5, 1200, 3456, 7777];

let myNum = myRealNumbe.sort((b, a) => {
  return a - b;
});

console.log(myNum);
//real example
