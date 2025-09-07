function compare(val1, val2) {
  if (val1 < val2) {
    return -1;
  }
  if (val1 > val2) {
    return 1;
  }
  return 0;
}
const arry = [3, 1, 4, 2, 5];
arry.sort(compare);
console.log(arry); // [1, 2, 3, 4, 5]
