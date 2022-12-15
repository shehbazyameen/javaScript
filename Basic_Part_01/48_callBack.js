//callBack functions

function MyFnc1(name) {
  console.log("call as a callBack Fnc");
  console.log("name is", name);
}
function MyFnc2(callBack) {
  console.log("hello there i am a fnc and i can ...");
  callBack("shehbaz");
}

MyFnc2(MyFnc1);

