/* 解答 ① */
// オブジェクト（obj）のエクスポート
export const obj = {
  console() {
    console.log("オブジェクト（obj）");
  },
};
// 関数（fn）のエクスポート
export function fn() {
  console.log("関数（fn）");
}
// クラス（StdClass）のエクスポート
export class StdClass {
  static console() {
    console.log("クラス（StdClass）");
  }
}
// 関数をデフォルトエクスポート
export default function () {
  console.log("デフォルトエクスポート関数");
}
