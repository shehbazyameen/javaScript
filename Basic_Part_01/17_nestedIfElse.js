//nested if else (if inside the else or if)

//example     wining game

let winingNo = 19;
let userGuessNo = +prompt("Guess a no");

if (winingNo === userGuessNo) {
  console.log("Wow Guess right No ");
} else {
  if (winingNo < userGuessNo) {
  }
  console.log("oho Guess No is small ");
}

//Note
// + convert string to no
//not prompt return string type19
