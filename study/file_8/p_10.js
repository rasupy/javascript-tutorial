// クラスの継承について
class Parent {
  method() {
    console.log("親クラスのメソッド");
  }
}
class Child extends Parent {
  method() {
    console.log("子クラスのメソッド");
  }
  myMethod() {
    this.method(); // 子クラスのメソッドを呼び出す
  }
  parentMethod() {
    super.method(); // 親クラスのメソッドを呼び出す
  }
}

const obj = new Child();
obj.myMethod(); // "子クラスのメソッド"
obj.parentMethod(); // "親クラスのメソッド"
