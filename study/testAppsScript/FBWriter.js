function executeFizzBuzz(SHEET, START_ROW, LAST_ROW) {
  // A列の値を取得
  const COL_A = SHEET.getRange(`A${START_ROW}:A${LAST_ROW}`).getValues();

  // FizzBuzzの結果を D, E, F 列に書き込む
  let fizzCount = 0;
  let buzzCount = 0;
  let fizzBuzzCount = 0;

  for (let i = 0; i < COL_A.length; i++) {
    const val = COL_A[i][0]; // A列 i 行目の値を取得

    // 最後の行に合計を書き込む
    if (i === COL_A.length - 1) {
      // 最後の行 + 1行 に合計を書き込む
      SHEET.getRange(START_ROW + i + 1, 4).setValue(fizzCount); // D列
      SHEET.getRange(START_ROW + i + 1, 5).setValue(buzzCount); // E列
      SHEET.getRange(START_ROW + i + 1, 6).setValue(fizzBuzzCount); // F列
    }

    if (isTerminator(val)) break; // 終了条件の判定

    let label = "";
    if (typeof val === "number") {
      if (val % 15 === 0) {
        label = "FizzBuzz";
        fizzBuzzCount++;

        SHEET.getRange(START_ROW + i, 2).setValue(label); // B列
        SHEET.getRange(START_ROW + i, 6).setValue(fizzBuzzCount); // F列
      } else if (val % 3 === 0) {
        label = "Fizz";
        fizzCount++;

        SHEET.getRange(START_ROW + i, 2).setValue(label); // B列
        SHEET.getRange(START_ROW + i, 4).setValue(fizzCount); // D列
      } else if (val % 5 === 0) {
        label = "Buzz";
        buzzCount++;

        SHEET.getRange(START_ROW + i, 2).setValue(label); // B列
        SHEET.getRange(START_ROW + i, 5).setValue(buzzCount); // E列
      }
    }
  }
}
// 終了条件の判定
function isTerminator(val) {
  return val === "" || (typeof val === "string" && val.toLowerCase() === "end");
}
