function noArgumentFunc() {
    return console.log("引数のない関数");
}

function multiply( x, y ) {
    return console.log( x * y );
}

function twoArgumentFunc( arg1, arg2 ) {
    console.log("arg1:", arg1);
    console.log("arg2:", arg2);
}


noArgumentFunc();
multiply( 7, 10, 15 );
twoArgumentFunc(); // undefined
twoArgumentFunc( 1, 2 );
