// アロー関数
setTimeout( ( hello ) => {
    console.log( hello );
}, 2000, "こんにちは" );

// function fn1( num1, num2 ) { return num1 + num2; }
const fn1Arrow = ( num1, num2 ) => { return num1 + num2; };
console.log( fn1Arrow( 10, 20 ) );

// function fn2( num ) { return num * 2; }
const fn2Arrow = ( num ) => { return num * 2; };
console.log( fn2Arrow( 10 ) );

// function fn3() { console.log( "Hello World!" ); }
const fn3Arrow = () => { console.log( "Hello World!" ); };
fn3Arrow();

// function fn4( name ) { 
// console.log( "Hello World!" );
// console.log( `Hello ${name}` );
// }
const fn4Arrow = ( name ) => {
    console.log( "Hello World!" );
    console.log( `Hello ${name}` );
}

// function fn5() { return { name: "独習太郎" }; }
const fn5Arrow = () => { return { name: "独習太郎" }; };
fn4Arrow( fn5Arrow().name );