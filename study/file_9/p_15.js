const fruits = {
  banana: "うまい",
  apple: "普通",
  orange: "微妙",
  other: {
    grape: "うまい",
  },
};

let value = JSON.stringify(fruits, ["banana", "orange"]);
console.log(value);

function replacer(key, value) {
  if (typeof value === "string" && value !== "うまい") {
    return;
  }
  return value;
}
console.log(JSON.stringify(fruits, replacer));
