function plus( a, b ) { return a + b; }
function minus( a, b ) { return a - b; }

function calc( val1, val2, callback ) {
    console.log( callback( val1, val2 ) );
}

calc( 1, 2, plus );
calc( 10, 2, plus );
calc( 10, 2, minus );