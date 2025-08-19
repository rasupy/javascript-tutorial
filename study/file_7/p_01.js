let scriptVal = "スクリプトスコープの変数";

function fn() {
    let fnVal = "関数スコープの変数";
    if( true ) {
        console.log( scriptVal, fnVal ); // "スクリプトスコープの変数" "関数スコープの変数"
        console.log( scriptFn() ); // "scriptFnの実行結果"
        console.log( sVal ); // sVal is not defined
    }
}

function scriptFn() {
    let sVal = "scriptFnの変数"; // scriptFn内の変数
    return "scriptFnの実行結果";
}

fn();
