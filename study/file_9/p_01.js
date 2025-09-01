// 1秒毎にブラウザのウィンドウ幅を表示する
let iW = innerWidth;

setInterval(() => {
  if (innerWidth !== iW) {
    console.log(innerWidth);
  } else {
    iW = innerWidth;
  }
}, 1000);
