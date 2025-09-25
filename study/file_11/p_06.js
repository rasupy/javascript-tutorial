// ジェネレーターについて
function* gen1to3() {
  let index = 1;
  yield index;
  index++;
  yield index;
  index++;
  return index;
}

const generator = gen1to3();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
