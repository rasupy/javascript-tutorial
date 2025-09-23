// 最小値と最大値を指定して、その範囲の数値を順番に返すイテレータを作成する
// rangeIterator(3, 7) → 3, 4, 5, 6, 7
// rangeIterator(7, 3) → Error
function rangeIterator(min, max) {
  if (min > max) {
    throw new Error("min should be less than or equal to max");
  }
  let currentIndex = min;
  const endIndex = max;

  return {
    next() {
      if (currentIndex > endIndex) {
        return {
          value: undefined,
          done: true,
        };
      }
      const value = currentIndex;
      currentIndex++;
      return {
        value: value,
        done: false,
      };
    },
  };
}
const it = rangeIterator(3, 7);
let nextValue = it.next();
while (!nextValue.done) {
  console.log(nextValue);
  nextValue = it.next();
}
