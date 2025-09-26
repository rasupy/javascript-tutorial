// Generatorオブジェクトは、反復可能オブジェクトでもある
function* fruits() {
  yield "バナナ";
  yield "リンゴ";
  yield "メロン";
}

const iterableObject = fruits();
for (const fruit of iterableObject) {
  console.log(fruit);
}
