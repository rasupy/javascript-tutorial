class TestCls {
  static STATIC_PROP = "静的プロパティ";
  static staticMethod() {
    return "静的メソッド";
  }
  method() {
    console.log(this.constructor.STATIC_PROP);
    console.log(this.constructor.staticMethod());
  }
}

const test = new TestCls();
test.method();
// "静的プロパティ"
// "静的メソッド"
