function calcAreaOfCircle( radius = 5, pi = 3 ) {
    return pi * radius * radius;
}

const area = calcAreaOfCircle( 6 );
console.log( "円の面積:" + area + "cm²" );