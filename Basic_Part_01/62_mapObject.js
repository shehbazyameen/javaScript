//Maps Object
//Not Method
//Store Key Any Type In Map this
//Map iterator (YES)
//object not iterable
//return in array type
//stored data in order formed means Jis Order may Set karo gay data us hi form may milay ga
//

//key value pair using Map()
const person = new Map();

person.set("firstName", "Shehbaz");
person.set("lastName", "Yameen");
person.set("Cast", "Malik");
person.set(1, "one");
person.set("subjects", { item: "item" });
person.set("hobbies", ["reading", "football"]);
person.set([1, 2, 3, 4], "array as a key");

console.log(person);

//access values
console.log(person.get(1));
console.log(person.get("firstName"));
console.log(person.keys());

//iteration of Keys of Map

for (let element of person.keys()) {
  console.log(element, "type", typeof element);
}

//return in array form

for (let element of person) {
  console.log("return in array form", element);
  console.log(Array.isArray(element));
}

//destructure
for (let [key, value] of person) {
  console.log(key, value);
}

//Direct Values set kr sakaty ha

const Data = new Map([
  ["firstName", "Shehbaz"],
  ["lastName", "Yameen"],
]);

console.log(Data);

//Extra Information stored in Object like dummy not in object
//use Map

const person1 = {
  id: 1,
  name: "shehbaz",
};

const ExtraInfo = new Map();
ExtraInfo.set(person1, { age: 28, gender: "male" });

console.log(ExtraInfo.get(person1).age);

//real Example
