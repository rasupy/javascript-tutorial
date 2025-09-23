// 数値を返すイテレーター
function genIterator(max) {
  let value = 0;

  return {
    next() {
      if (value < max) {
        return {
          done: false,
          value: value++,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
}

const iterator = genIterator(3);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
