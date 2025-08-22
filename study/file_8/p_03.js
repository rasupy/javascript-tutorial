class User {
  constructor(username, password, roll) {
    this.username = username;
    this.password = password;
    this.roll = roll;
  }

  login() {
    this.check();
    this.checkRoll(this.roll);
    console.log(`ログイン [ ${this.username} / ${this.password} ]`);
  }

  check() {
    console.log(`ログイン情報をチェックします。`);
  }

  checkRoll() {
    if (this.roll === "admin") {
      console.log(`[ ${this.username} ]は、管理者権限でログインしました。`);
    } else {
      console.log(
        `[ ${this.username} ]は、一般ユーザーとしてログインしました。`
      );
    }
  }
}

const taro = new User("Taro", "taro-pwd", "admin");
const hanako = new User("Hanako", "hanako-pwd", "user");

taro.login();
hanako.login();
