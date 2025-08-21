const taro = {
    name: "Taro",
    hello: function() {
        console.log( "Hello, my name is " + this.name);
    }
}

taro.hello();