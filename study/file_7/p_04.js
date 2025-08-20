// スコープ
let val = "グローバル";

function fn1() {
    let val = "関数内";

    if( Math.random() < .5 ) {
        console.log( val );
        fn1();
    }

    function fn2() {
        console.log( val );
    }

    console.log( val );

    fn2();
    return val;
}

function fn3() {
    console.log( val );
}

console.log( val );

const result = fn1();
console.log( result );
fn3();
