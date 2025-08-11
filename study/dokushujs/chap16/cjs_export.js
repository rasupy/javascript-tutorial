// module.exportsとexportsに同じオブジェクトを設定する
module.exports = exports = {
  exportedFunction: function () {},
};
exports.exportedVariable = "これはエクスポートされます。";
console.log(module.exports);
// > { exportedFunction: function () {}, exportedVariable: "これはエクスポートされます。" }
