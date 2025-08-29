class User {
  deleted = 0;
  constructor(username, deleted) {
    this.username = username;
    this.deleted = deleted;
  }
  login() {
    if (this.deleted === 0) {
      console.log(`${this.username}さん、ログインしました。`);
    } else {
      console.log(`${this.username}さん、アカウントが削除されています。`);
    }
  }
}

class AdminUser extends User {
  deleteUser(user) {
    // ユーザーがUserのインスタンスであることを確認
    if (user instanceof User) {
      user.deleted = 1;
      console.log(`${user.username}さんのアカウントを削除しました。`);
    } else {
      console.log(`無効なユーザーです。`);
    }
  }
}

const normalUser = new User();
const adminUser = new AdminUser();

normalUser.username = "Konata Izumi";
adminUser.username = "Admin";

adminUser.deleteUser(normalUser); // Konata Izumiさんのアカウントを削除しました。
