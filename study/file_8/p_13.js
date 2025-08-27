class Person {
  constructor(firstname) {
    this._lastname = "独習";
    this._firstname = firstname;
  }

  get fullname() {
    return this._lastname + this._firstname;
  }

  set age(value) {
    this._age = Number(value);
  }

  get age() {
    return this._age;
  }
}

const taro = new Person("太郎");
taro.age = 18;

console.log(taro.age); // 18
console.log(taro.fullname); // 独習太郎
