const add = new Function( "val1", "val2", "return val1 + val2;" );

const result = add( 1, 2 );
console.log(result);