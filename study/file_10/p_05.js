const arry = [1, 2, 3, 4, 5];
arry.forEach((value, index, arry) => console.log(value, index, arry));
// 1 0 [1, 2, 3, 4, 5]
// 2 1 [1, 2, 3, 4, 5]
// 3 2 [1, 2, 3, 4, 5]
// 4 3 [1, 2, 3, 4, 5]
// 5 4 [1, 2, 3, 4, 5]

function multiply5(value) {
  console.log(value * 5);
}
arry.forEach(multiply5);
// 5
// 10
// 15
// 20
// 25
