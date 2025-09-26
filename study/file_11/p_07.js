// 反復可能オブジェクトの作成
class Iterable {
  *[Symbol.iterator]() {
    for (let key in this) {
      yield [key, this[key]];
    }
  }
}
const fruits = new Iterable();
fruits.apple = "りんご";
fruits.banana = "バナナ";
fruits.orange = "オレンジ";

for (const row of fruits) {
  console.log(row[0], row[1]);
}
