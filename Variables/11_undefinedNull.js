//Topic
// undefined , null ,BigInt

// undefined

let firstName;
console.log(typeof firstName + firstName);
firstName = "shehbazmalik";
console.log(typeof firstName + firstName);

// null  (not anyThing)

let lastName = null;
console.log(typeof lastName, lastName); // print object {}
//Note//
// ya javaScript may Bug and error ha not ed
//is waja abhi tak sahi q nahi q k kafi logo nay code kr diya is waja say is abhi resolve nahi kia

//BigInt //permitative data type
//number store karny ki bhi limt ha javaScript may
//agr bara number ho to bigint use kary gay

let myNumber = BigInt(123);
let myNumber2 = 1113n; //bigInt ko aisy bhi kr sakty using n

console.log(myNumber+myNumber2);

//check max length of Number
//number store karny ki bhi limt ha javaScript may
console.log(Number.MAX_SAFE_INTEGER);
