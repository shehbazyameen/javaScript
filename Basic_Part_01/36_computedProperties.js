//computed properties

const key1 = "objkey1";
const key2 = "objkey2";
const value1 = "myvalue1";
const value2 = "myvalue2";

//task
// create object using above values
//computed properties []
const obj = {
  [key1]: value1,
  [key2]: value2,
};

console.log(obj);

//OR
// without computed properties []
const obj2 = {};
obj2[key1] = value1;
obj2[key2] = value2;

console.log(obj2);
