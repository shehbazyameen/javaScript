//how to iterate objects
// 1 for in loop
// 2 object.key

const objAsStringKey = {
  name: "shehbaz",
  age: 22,
  "person hobbies": ["sleeping", "music"],
};

// 1 for in loop
for (let key in objAsStringKey) {
  console.log(objAsStringKey[key]);
}

for (let key in objAsStringKey) {
  console.log(`${key} : ${objAsStringKey[key]}`);
  //OR
  console.log(key, ":", objAsStringKey[key]);
}

// 2 object.key
console.log("object.key", Object.keys(objAsStringKey));
for (let key of Object.keys(objAsStringKey)) {
  console.log("object.key", objAsStringKey[key]);
}
