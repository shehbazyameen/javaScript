//rest parameters

function myFnc(a, b, ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

myFnc(3, 2, 4, 5, 6, 7);

// Task 1
//some of all params
function AddAll(...number) {
  let total = 0;
  for (num of number) {
    total = total + num;
    console.log(total);
  }
  return total;
}

console.log("add All", AddAll(2, 3, 4, 5, 6, 2, 3));
