// Promiseがrejectedになった場合
async function throwError() {
  try {
    await Promise.reject("Promiseが失敗しました。");
  } catch (error) {
    console.log(error);
  }
}
throwError();
