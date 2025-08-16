// 無名関数の定義
const fn = function() { }

const obj = {
    method: function() { }
}

// 練習問題
setTimeout( function() {
    console.log( "こんにちは" );
}, 3000 );

function hello() {
    console.log( "こんにちは" );
}
setTimeout( hello, 3000 );

const str = hello.toString();
console.log(str);