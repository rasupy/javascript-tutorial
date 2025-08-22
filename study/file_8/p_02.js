// クラスの基礎
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login() {
    console.log(`ログイン [ ${this.username} / ${this.password} ]`);
  }

  changePassword(pwd) {
    this.password = pwd;
    console.log(`パスワード変更 [ ${this.username} / ${this.password} ]`);
  }
}

const taro = new User("Taro", "taro-pwd");
const hanako = new User("Hanako", "hanako-pwd");

taro.login();
hanako.login();

// パスワード変更
taro.changePassword("new-pwd");

taro.login();
hanako.login();
