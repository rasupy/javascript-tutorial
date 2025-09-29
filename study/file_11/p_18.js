// スプレッド演算子の練習問題
class Shape {
  constructor(options) {
    const defaultOptions = {
      type: "四角形",
      textColor: "黒",
      borderColor: "なし",
      bgColor: "白",
    };
    this.options = { ...defaultOptions, ...options };
  }
  draw() {
    const { type, textColor, borderColor, bgColor } = this.options;
    console.log(
      `形: ${type}, 文字色: ${textColor}, 枠色: ${borderColor}, 背景色: ${bgColor}`
    );
  }
}

const triangle = new Shape({ type: "三角形" });
triangle.draw();
// 形: 三角形, 文字色: black, 枠色: black, 背景色: white
