// 正規表現
const postalcode1 = "001-0012";
const postalcode2 = "001-001";
const postalcode3 = "2.2-3042";

const postalCodePattern = /^\d{3}-\d{4}$/;
console.log(postalCodePattern.test(postalcode1)); // true
console.log(postalCodePattern.test(postalcode2)); // false
console.log(postalCodePattern.test(postalcode3)); // false
