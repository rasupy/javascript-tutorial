// クラスの基礎
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  logging() {
    console.log(`ログイン [ ${this.username} / ${this.password} ]`);
  }
}

const taro = new User("Taro", "taro-pwd");
const hanako = new User("Hanako", "hanako-pwd");
