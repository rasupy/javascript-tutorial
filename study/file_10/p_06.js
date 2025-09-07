const arry = [1, 2, 3, 4, 5];
function multiply5(value) {
  return value * 5;
}

const newArry = arry.map(multiply5);
console.log(newArry); // [5, 10, 15, 20, 25]
