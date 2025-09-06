const fruits = ["banana", "orange", "grape"];
fruits.push("apple");
console.log(fruits); // ["banana", "orange", "grape", "apple"]

fruits.unshift("lemon");
console.log(fruits); // ["lemon", "banana", "orange", "grape", "apple"]

let returnVal = fruits.shift();
console.log(returnVal); // "lemon"
console.log(fruits); // ["banana", "orange", "grape", "apple"]

returnVal = fruits.pop();
console.log(returnVal); // "apple"
console.log(fruits); // ["banana", "orange", "grape"]

let deletedVal = fruits.splice(1, 2);
console.log(fruits); // ["banana"]
console.log(deletedVal); // ["orange", "grape"]

fruits.splice(0, 1, "apple", "orange", "grape");
console.log(fruits); // ["apple", "orange", "grape"]
