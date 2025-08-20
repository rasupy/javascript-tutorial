function delayMessageFactory1() {
    return (message) => setTimeout( () => alert( message ), 2000 );
}

const delayMessage1 = delayMessageFactory1();
delayMessage1("こんにちわ");

function delayMessageFactory2() {
    return (message) => setTimeout( () => console.log( message ), 1000 )
}

const delayMessage2 = delayMessageFactory2();
delayMessage2("こんばんは");
