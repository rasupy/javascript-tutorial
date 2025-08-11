const val = "ECMAScriptの仕様に沿って記述します。";
function fn() {
console.log("関数を利用することができます。");
}
fn();
class NodeClass {
constructor() {
console.log("クラスも使用することができます。");
}
}
new NodeClass;
Promise.resolve().then(() => {
console.log("Promiseなども使用可能です。");
});
function* generator() {
yield "ジェネレータも使えます。";
}
for (const str of generator()) {
console.log(str);
}