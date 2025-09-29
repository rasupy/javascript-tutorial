// 練習問題
const chuka = ["ラーメン", "チャーハン", "ギョーザ"];
const desert = ["杏仁豆腐", "ゴマ団子", "マンゴープリン"];

// chuka を複製
const chuka_copy = [...chuka];
console.log(chuka_copy);

// chuka と desert を結合
const menu = [...chuka, ...desert];
console.log(menu);

// chuka と desert の間に"担々麺"を追加
const menu2 = [...chuka, "担々麺", ...desert];
console.log(menu2);
