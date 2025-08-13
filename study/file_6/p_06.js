function hello( personName ) {
    if ( String( personName ) ) {
        console.log( "こんにちわ、" + personName );
    } else {
        console.log( "引数に文字列を渡してください" );
    }
}

let personName = "小泉";
hello( personName );