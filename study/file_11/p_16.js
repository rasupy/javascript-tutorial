// symbol.iterator
Array.prototype[Symbol.iterator] = function* () {
  yield "Hello";
  yield "World";
  yield "!!!";
};

const arry = [1, 2, 3];
const newArry = [...arry];
console.log(newArry);
// [ 'Hello', 'World', '!!!' ]
