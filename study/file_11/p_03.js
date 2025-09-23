// 文字列を返すイテレーター
function alphabetIterator(start = "a", end = "z") {
  if (start > end) {
    throw "開始文字は終了文字より前のアルファベットを選んでください";
  }

  // splitはStringオブジェクトのメソッドで引数で指定された文字で文字列を分離し、配列として返す
  // なお、空文字（""）が渡された場合には、文字列を1文字ずつ分離する
  const ALPHABET_ARRAY = "abcdefghijklmnopqrstuvwxyz".split("");
  // ALPHABET_ARRAY = ["a", "b", "c", ..., "z"]

  let currentIndex = ALPHABET_ARRAY.indexOf(start);
  const endIndex = ALPHABET_ARRAY.indexOf(end);

  const targetAlphabet = ALPHABET_ARRAY.slice(currentIndex, endIndex + 1);

  return {
    next() {
      const alphabet = targetAlphabet.shift();

      return {
        value: alphabet,
        done: alphabet ? false : true,
      };
    },
  };
}
const it = alphabetIterator("c", "e");
let nextValue = it.next();
while (!nextValue.done) {
  console.log(nextValue);
  nextValue = it.next();
}
