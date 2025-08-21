window.name = "Hanako";

const taro = {
    name: "Taro",
    hello: function() {
        console.log( "Hello, " + this.name );
    }
}

setTimeout( taro.hello.bind( taro ), 2000 );
setTimeout( taro.hello, 3000 );