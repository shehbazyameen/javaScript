// Object Destructuring

const myObject = {
  name: "shehbaz",
  age: 22,
  cast: "malik",
};

let { age: myAge, education = "BS", ...remainingData } = myObject;
console.log(myAge, education, remainingData);
