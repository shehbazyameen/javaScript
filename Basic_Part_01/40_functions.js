//function in javaScripts
//reuse able

//function expression
let funcexpr = function myFnc() {
  return console.log("My Function");
};

console.log(funcexpr());

//sum of two Numbers
function sumTwoNumbers(a, b) {
  console.log(a + b);
}
sumTwoNumbers(2, 3);

///

//Task 1
//isEven
//input : 1number
//out put

function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return console.log("even No", number % 2);
  } else {
    console.log("odd No", number % 2);
  }
}
checkEvenOrOdd(2);

//Task 2
//function
//input  : may string lay
//output : first character

function firstCharacter(anyString) {
  //string ka index hamy milta ha to
  return anyString[0];
}
console.log("firstCharacter", firstCharacter("malik"));
//

//Task 3
//function  :array,target (number)
//output:index pf target if present in array

function searchNumberInIndex(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      console.log(array[i]);
    }
  }
  return "not available";
}

console.log(searchNumberInIndex([1, 2, 4, 6, 87], 87));

//multiply FUNCTION
function multiply(multiple_num) {
  return function (arg) {
    let value = arg * multiple_num;
    console.log("value", value);
  };
}

const multiply10 = multiply(2);
// const my = multiply10();
console.log(multiply10());
