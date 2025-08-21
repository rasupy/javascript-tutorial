const vals = [ 1, 2, 3 ];

console.log( Math.max( vals[ 0 ], vals[ 1 ], vals[ 2 ] ) ); // 3
console.log( Math.max.apply( null, vals ) ); // 3