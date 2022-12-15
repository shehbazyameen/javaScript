// default parameters

//Old Method
function addTowNum(a, b) {
  if (typeof b === "undefined") {
    b = 0;
  }
  return a + b;
}

console.log(addTowNum(2));

// New Method
function addTowNum(a, b = 0) {
  return a + b;
}

console.log(addTowNum(2));
