// Iterableクラスを継承
class Iterable {
  *[Symbol.iterator]() {
    for (let key in this) {
      yield [key, this[key]];
    }
  }
}
class Person extends Iterable {
  constructor(name, age, gender) {
    super();
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
const taro = new Person("太郎", 18, "男性");
for (const row of taro) {
  console.log(row[0], row[1]);
}
