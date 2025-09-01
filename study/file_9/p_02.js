// タイムゾーンの設定なし
// 現地時刻(JST)
const localTime = new Date("2021-05-04T02:35:00");
console.log(localTime.toISOString());

// 世界標準時を指定
// ZによりUTC時刻
const utcTime = new Date("2021-05-04T02:35:00Z");
console.log(utcTime.toISOString());

// ハワイ時間を指定
// -10時間によりハワイ時刻
const hawaiiTime = new Date("2021-05-04T02:35:00-10:00");
console.log(hawaiiTime.toISOString());
