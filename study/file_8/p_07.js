class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  get fullname() {
    return this.lastname + this.firstname;
  }

  set age(value) {
    this._age = Number(value);
  }

  get age() {
    return this._age;
  }
}

const taro = new Person("Taro", "Dokusyu");
console.log(taro.fullname);

taro.age = "18";
console.log(typeof taro.age);

console.log(taro);
