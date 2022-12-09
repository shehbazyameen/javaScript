//spread operator

// 1   Spread oprator in Array
const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

const newArray = [...array1, ...array2];
console.log(newArray);

//spread string
//only string apply
const newArray2 = [..."abcd"];
console.log(newArray2);
//out put ['a', 'b', 'c', 'd']

// 2 Spread operator in Objects
const obj1 = {
  key1: "value 1",
  key2: "value 2",
};
const obj2 = {
  key1: "updated value 1",
  key3: "value 3",
  key4: "value 4",
};
const myObject = {
  ...obj1,
  ...obj2,
  key5: "value 5",
};

console.log(myObject);

//spread string as object
//only string apply

const newObject2 = { ..."abcd" };
const newObject3 = { ...["item1", "item2"] };
console.log(newObject2, newObject3);
// out Put  {0: 'a', 1: 'b', 2: 'c', 3: 'd'}
//index no as a key
