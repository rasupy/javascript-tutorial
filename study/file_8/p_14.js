// prototype にメソッドを登録
function Person(name) {
  this.name = name;
}

Person.prototype.hello = function () {
  console.log(`こんにちは、${this.name}さん！`);
};

const taro = new Person("独習太郎");
taro.hello(); // こんにちは、独習太郎さん！

const hanako = new Person("独習花子");
hanako.hello(); // こんにちは、独習花子さん！
