// シートの内容をリフレッシュするスクリプト
function executeRefreshSheet(SHEET, START_ROW, LAST_ROW) {
  // A列の内容を取得
  const COL_A = SHEET.getRange(`A${START_ROW}:A${LAST_ROW}`).getValues();
  const COL_BF = 5; // B列からF列までの列数

  // A列の内容を参照しながら、B列からF列までをリフレッシュする
  let rowsToClear = 0; // クリアする行数のカウンタ
  for (let i = 0; i < COL_A.length; i++) {
    const val = COL_A[i][0]; // A列 i 行目の値を取得

    if (isTerminator(val)) break; // 終了条件の判定

    rowsToClear++;
  }

  if (rowsToClear > 0) {
    // 対象範囲を一括でクリア（B列〜F列）
    // ()開始行, 2列目(B列), クリアする行数, 5列分(B〜F列)
    SHEET.getRange(START_ROW, 2, rowsToClear, COL_BF).clearContent();
  }
}
// 終了条件の判定
function isTerminator(val) {
  return val === "" || (typeof val === "string" && val.toLowerCase() === "end");
}
