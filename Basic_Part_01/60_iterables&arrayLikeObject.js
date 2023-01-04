//iterables or iterations
//jis pr ham for of loop laga sakay
//string and array  are iterable

//Example 1 string iterable

const myName = "shehbazmalik";

for (let element of myName) {
  console.log(element);
}

for (let indexNo in myName) {
  console.log(indexNo);
}

//Example 2 array iterable

const array = ["January", "March", "April", "May", "June", "July"];

for (let element of array) {
  console.log(element);
}

for (let indexNo of array) {
  console.log(indexNo);
}

//array Like Object
//jiske pas length property hoti ha
//aur jisko ko ham index say access kr saktay ho
//example : - string

const user = "Ali";
console.log(user.length);
console.log(user[0]);
