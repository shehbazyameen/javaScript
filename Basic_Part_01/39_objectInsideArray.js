//object inside array
// Very useful in real world applications

const users = [
  { name: "shehbaz", age: 22, cast: "malik" },
  { name: "sameer", age: 20, cast: "pujabi" },
  { name: "Saeed", age: 40, cast: "gull" },
];

for (let user of users) {
  console.log(user);
}

//nested destructuring very important

const [{ name: changeKeyName }, , { age }] = users;
console.log(changeKeyName, age);
