const dt = new Date("2022-05-12T03:12:13.333Z");
console.log(dt); // 2022-05-12T03:12:13.333Z

function getDayOfWeek(dt, days) {
  let d = dt.getDay();
  if (d === 0) {
    days = "日曜日";
  } else if (d === 1) {
    days = "月曜日";
  } else if (d === 2) {
    days = "火曜日";
  } else if (d === 3) {
    days = "水曜日";
  } else if (d === 4) {
    days = "木曜日";
  } else if (d === 5) {
    days = "金曜日";
  } else if (d === 6) {
    days = "土曜日";
  }

  return days;
}

dt.setDate(2);
console.log(dt, getDayOfWeek(dt, ""));

dt.setMonth(8); // 9月
console.log(dt, getDayOfWeek(dt, ""));

dt.setFullYear(2025);
console.log(dt, getDayOfWeek(dt, ""));
