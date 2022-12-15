// block { scope }
//block Scope vs function scope
//let and const always on block
//scope not access another block scope
//var is function scope

{
  let firstName = "malik";
  console.log(firstName);
}

{
  const firstName = "malik";
  console.log(firstName);
}

//global scope
const firstName = "malik";
console.log(firstName);

//var is global scope

{
  var age = 23;
}
console.log(age);

// Example 2

function MyApp() {
  if (true) {
    let firstName = "Malik";
    console.log(firstName);
  }
  console.log(firstName);
}

MyApp();
