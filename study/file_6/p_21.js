// コールバック関数
function hello() {
    return "こんにちは";
}

setTimeout( function( callback ) {
    console.log( callback() );
}, 2000, hello );


function add( val1, val2 ) {
    return val1 + val2;
}
function minus( val1, val2 ) {
    return val1 - val2;
}

function calcAndDisp( callback ) {
    const result = callback( 10, 5 );
    console.log( result );
}
calcAndDisp( add );
calcAndDisp( minus );