//function returning function
//call back ko hiorder Fnc bhi boltay
//everything is return
//function can return function

function myFucntion() {
  function hello() {
    console.log("inside Fnc");
    return "hello World";
  }
  return hello;
}

const ans = myFucntion();
console.log(ans());
