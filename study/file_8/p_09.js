// クラスの継承
class Parent {
  constructor(value) {
    this.parentProp = value;
  }
  parentMethod() {
    console.log("親クラスのメソッド");
  }
}

class Child extends Parent {
  constructor(parentProp, childProp) {
    super(parentProp); // 親クラスのコンストラクタを実行
    this.childProp = childProp; // 子クラスのプロパティを追加
  }

  childMethod() {
    // 子クラスのメソッドを追加
    // 親クラスのプロパティを取得
    console.log("子クラスのメソッド");
  }
}

// 子クラスのインスタンスを作成
const childObject = new Child("親クラスのプロパティ", "子クラスのプロパティ");
// オブジェクトの確認
console.log(childObject);
childObject.parentMethod(); // 親クラスのメソッドも実行可能！
childObject.childMethod(); // 子クラスのメソッドも実行可能！
