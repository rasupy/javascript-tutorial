function executePrimeMarker(SHEET, START_ROW, LAST_ROW) {
  const COL_A = SHEET.getRange(`A${START_ROW}:A${LAST_ROW}`).getValues();
  // A列の値を取得
  // 素数判定結果をC列に書き込む
  for (let i = 0; i < COL_A.length; i++) {
    const v = COL_A[i][0]; // A列 i 行目の値を取得

    if (isTerminator(v)) break; // 終了条件の判定

    SHEET.getRange(START_ROW + i, 3).setValue(isPrime(v) ? "●" : "");
    // (開始行 + i)行目, 3列目(C列)に書き込む
  }
}

// 素数判定用関数（引数: num === v）
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 終了条件の判定
function isTerminator(v) {
  return v === "" || (typeof v === "string" && v.toLowerCase() === "end");
}
