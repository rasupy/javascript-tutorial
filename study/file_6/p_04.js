function printSum( a, b ) {

    if( typeof a !== "number" || typeof b !== "number" ) {
        console.log("引数が不正なデータ型のため、関数処理を終了します。");
        return;
    }
    console.log( a + b );
}

let result = printSum( "10", "20" );
// undefined

console.log( result );
// undefined

printSum( 10, 20 );