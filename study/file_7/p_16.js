window.greeting = "こんにちわ";

function hello() {
    console.log( this.greeting );
}

hello();

const dog = {
    greeting: "ワンワン",
    hello
};

dog.hello();

const gorilla = {
    greeting: "ウホウホ",
    hello
};

gorilla.hello();

const transform = gorilla.hello;
transform();

setTimeout( transform.bind(gorilla), 2000 );