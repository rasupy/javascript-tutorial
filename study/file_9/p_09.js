// 正規表現 e-mailに一致
const email1 = "test@example.com";
const email2 = "test.example.com";
const email3 = "test@.com";

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(emailPattern.test(email1)); // true
console.log(emailPattern.test(email2)); // false
console.log(emailPattern.test(email3)); // false
