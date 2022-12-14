//function inside a function

const App = () => {
  const MyInsideFnc1 = () => {
    console.log("MyInsideFnc 1");
  };

  const addTwoNumber = (num1, num2) => {
    return num1 + num2;
  };

  console.log("function inside a function");
  MyInsideFnc1();
  addTwoNumber(2 + 4);
};

App();
