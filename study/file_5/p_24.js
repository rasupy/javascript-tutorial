const breakTestArray = [ "ぬけない", "not break", "break", "この前で抜ける" ];

for( bta of breakTestArray ) {
    console.log( bta );
    if ( bta === "break" ) {
        break;
    }
}