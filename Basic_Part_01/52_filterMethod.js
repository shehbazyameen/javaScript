//filter method
// return true or false
//return value jo true  ha

const numbers = [2, 3, 4, 5, 7];

const evenNumber = numbers.filter((num) => {
  num >= 4;
  return <p>${num}</p>;
});
console.log(evenNumber);
// console.log(numbers);

//difference between filter and map
const userDetails = numbers.map((item, index) => {
  return item >= 4;
});

//return new Array
console.log(userDetails);
