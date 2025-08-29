function Parent() {}

function Child() {}

Parent.prototype.parentMethod = function () {
  console.log("親のメソッド");
};

// 親のプロトタイプを継承
Child.prototype = Object.create(Parent.prototype);

Child.prototype.childMethod = function () {
  console.log("子のメソッド");
};

const childObj = new Child();
childObj.parentMethod(); // 親のメソッド
childObj.childMethod(); // 子のメソッド
