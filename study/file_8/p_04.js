class Human {
  static TYPE = "普通の人";

  static staticMove() {
    console.log(Human.TYPE + "は歩いて移動します。");
  }

  constructor(name) {
    this.name = name;
  }

  move() {
    console.log(this.name + "は歩いて移動します。");
  }
}

const taro = new Human("太郎");
Human.staticMove(); // "普通の人は歩いて移動します。"

console.log(Human.TYPE); // "普通の人"

taro.move(); // "太郎は歩いて移動します。"
