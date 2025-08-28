class Test {
  hello() {
    console.log("こんにちは");
  }
}

const instance = new Test();

Test.prototype.hello();
// こんにちは

instance.__proto__.hello();
// こんにちは

instance.hello();
// こんにちは

Test.prototype.hello = function () {
  console.log("Hello"); // 上書き
};

instance.hello();
// Hello
