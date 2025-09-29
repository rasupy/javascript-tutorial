// 関数実行時の使用
const maxValue = Math.max(10, 20, 5, 8, 30);
console.log(maxValue); // Output: 30

const numArray = [10, 20, 5, 8, 30];
const maxFromArray = Math.max(...numArray); // スプレッド演算子
console.log(maxFromArray); // Output: 30

// 配列の作成
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log([...array1, ...array2]); // Output: 1 2 3 4 5 6

console.log([...array2, ...array1]); // Output: 4 5 6 1 2 3

console.log([0, ...array2, 70, ...array1, 100]);
// Output: 0 4 5 6 70 1 2 3 100
