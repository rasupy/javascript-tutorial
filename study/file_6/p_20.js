// 無名関数
console.log("- 無名関数 -");

const hello = function() {
    console.log( "こんにちは" );
}
hello();

const double = function( num ) {
    return num * 2;
}
console.log( double(10) );

setTimeout( function( name ) {
    console.log( "こんにちは" + name );
}, 1000, "独習太郎" );

// アロー関数
console.log("- アロー関数 -");

const helloArrow = () => {
    console.log( "こんにちは" );
}
helloArrow();

const doubleArrow = ( num ) => {
    return num * 2;
}
console.log( doubleArrow( 10 ) );

setTimeout( ( nameArrow ) => {
    console.log( "こんにちは" + nameArrow );
}, 1000, "独習太郎" );