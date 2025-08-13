function hello( name ) {
    console.log( `こんにちは、${name}` );
}

const obj = hello;
obj( "独習太郎" );

console.log( obj === hello ); // true