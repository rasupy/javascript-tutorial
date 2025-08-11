const str = [ "a", "b", "c" ];
const num = [ 10, 20, 30 ];

alphabet:
for( let i = 0; i < str.length; i++ ) {
    numeric:
    for( let j = 0; j < num.length; j++ ) {
        console.log( `アルファベット: [ ${ str[ i ] } ]`, `数値: [ ${ num[ j ] } ]` );

        if( str[ i ] === "b" && num[ j ] === 30 ) {
            break alphabet;
        }
    }
}
