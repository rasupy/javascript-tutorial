const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

const newFruits = fruits.concat("fig", "grape");
console.log(newFruits);

const allFruits = fruits.slice();
console.log(allFruits);

const citrus = fruits.slice(1);
console.log(citrus);

const arry = [1, 2, 3, 4, 5];
arry.reverse();
console.log(arry); // [5, 4, 3, 2, 1]
