//Splice Method
//change original array
//splice(index no start, deleteCount, item1, item2, itemN)

const months = ["January", "March", "April", "May", "June", "July"];

let deleteItem = months.splice(0, 1, "February");

console.log("change original array", months, "deleteItem", deleteItem);
