const arry = [1, 2, 3, 4, 5];
const result1 = arry.some((value) => value > 4);
console.log(result1); // true

const result2 = arry.some((value) => value > 5);
console.log(result2); // false
