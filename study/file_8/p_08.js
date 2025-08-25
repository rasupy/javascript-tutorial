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

  set gender(value) {
    value = value.toLowerCase(); // 小文字に変換

    if (value === "male" || value === "female") {
      this._gender = value;
    } else {
      this._gender = "unknown";
    }
  }

  get gender() {
    return this._gender;
  }
}

const taro = new Person("Taro", "Dokusyu");
console.log(taro.fullname);

taro.age = "18";
console.log(typeof taro.age);

taro.gender = "Male";
console.log(taro.gender);

console.log(taro);
