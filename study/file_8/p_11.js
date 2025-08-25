class Parent {
  constructor(familyName) {
    this.familyName = familyName;
  }
  introduction() {
    console.log("名前は、" + this.familyName + "です。");
  }
}
class Child extends Parent {
  parentIntroduction() {
    super.introduction();
  }
}

const taro = new Child("独習");
taro.introduction();
// "名字は、独習です。"
