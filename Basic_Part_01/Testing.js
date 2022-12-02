// programme 1
// var num_1 = 10;
// var num_2 = 20;
// var num_3 = 30;

// for (let i = 1; i <= 3; i++) {
//   console.log(window["num_" + i]);
// }

// programme 2

let key = "PLKIOUJHYGVBNMTRFCXEDSWQAZ";
let str = "Hello, World";

const fnc = (string) => {
  var hash = 0;
  if (string.length == 0) return hash;
  for (x = 0; x < string.length; x++) {
    ch = string.charCodeAt(x);
    hash = (hash << 5) - hash + ch;
    hash = hash & hash;
  }
  return hash;
};

console.log(fnc(str));
