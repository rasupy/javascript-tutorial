// FizzBuzzの結果を書き込む
function FBWriter() {
  const SHEET_NAME = "sheet1"; // 書き込むシート名:"sheet1"
  const START_ROW = 2; // 開始行を指定
  const SHEET =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  // シート取得
  const LAST_ROW = SHEET.getLastRow(); // 最終行を取得
  executeFizzBuzz(SHEET, START_ROW, LAST_ROW);
  executeCounter(SHEET, START_ROW, LAST_ROW);
}

// 開始行を取得して FizzBuzzの結果を書き込む
function FBWriter2() {
  const SHEET_NAME = "sheet1"; // 書き込むシート名:"sheet1"
  const START_ROW = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName("sheet2") // 参照するシート名: "sheet2"
    .getRange("B9")
    .getValue(); // "sheet2", "B9"から開始行を取得
  const SHEET =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  // シート取得
  const LAST_ROW = SHEET.getLastRow(); // 最終行を取得
  executeFizzBuzz(SHEET, START_ROW, LAST_ROW);
}

// 素数判定の結果を書き込む
function primeMarker() {
  const SHEET_NAME = "sheet1"; // 書き込むシート名:"sheet1"
  const START_ROW = 2; // 開始行を指定
  const SHEET =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  // シート取得
  const LAST_ROW = SHEET.getLastRow(); // 最終行を取得
  executePrimeMarker(SHEET, START_ROW, LAST_ROW);
}

// シートをリフレッシュする。
function refreshSheet() {
  const SHEET_NAME = "sheet1"; // 書き込むシート名:"sheet1"
  const START_ROW = 2; // 開始行を指定
  const SHEET =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  // シート取得
  const LAST_ROW = SHEET.getLastRow(); // 最終行を取得
  executeRefreshSheet(SHEET, START_ROW, LAST_ROW);
}
