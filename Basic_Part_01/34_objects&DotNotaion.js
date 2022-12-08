//difference between dot and bracket notation

const key = "email";
const objAsStringKey = {
  name: "shehbaz",
  age: 22,
  "person hobbies": ["sleeping", "music"],
};

// bracket notation
console.log(objAsStringKey["person hobbies"]);

//add key object
objAsStringKey[key] = "sheh@gmail.com";
console.log(objAsStringKey);
