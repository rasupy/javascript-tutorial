class Parent {
  constructor(familyName) {
    this.familyName = familyName;
  }
  introduction() {
    console.log(`名字は${this.familyName}です。`);
  }
}

class Child extends Parent {
  constructor(familyName) {
    super(familyName);
  }
}

const taro = new Child("独習");

console.log(taro.hasOwnProperty("familyName")); // true
console.log(taro.hasOwnProperty("introduction")); // false
console.log("introduction" in taro); // true
console.log("hasOwnProperty" in taro); // true
