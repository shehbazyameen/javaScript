// In JavaScript, almost "everything" is an object.
//object is reference type like array
//array are good but not sufficient
//for real world data
//object store key values pairs
//object without index
//javaScript may jo key value dono string may hoti ha

//how to create objects or object literal
const obj = { name: "shehbaz", age: 22, hobbies: ["sleeping", "music"] };
//both objects are same
// const objAsStringKey = {
//   "name": "shehbaz",
//   "age": 22,
//   "hobbies": ["sleeping", "music"],
// };

console.log(obj.name);
console.log(obj.age);
console.log(obj.hobbies);
console.log(obj);

//how to add key value pair in objects
obj.gender = "male";
console.log("add key value", obj);

//access data from objects
console.log(obj["name"]);
console.log(obj["age"]);
console.log(obj["hobbies"]);
