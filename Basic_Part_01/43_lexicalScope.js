//lexical Scope
//lexical environment

function App() {
  const myValue = "Lexical my Value1";

  function myInsideFnc() {
    // const myValue = "myValue 2";

    console.log("My Lexical Var" + myValue);
  }

  console.log(myValue);
  myInsideFnc();
}

App();
