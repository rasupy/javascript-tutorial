const taro = {
    name: "Taro",
    hello: function() {
        console.log( "Hello, " + this.name );
    }
}

setTimeout( function() {
    taro.hello();
}, 2000 );