//hoisting

hello();
myExpressionFnc();

function hello() {
  console.log("hello");
}

let myExpressionFnc = function hello2() {
  console.log("myExpressionFnc");
};
