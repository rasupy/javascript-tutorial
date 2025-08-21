window.name = "Hanako";

const taro = {
    name: "Taro",
    hello: function() {
        console.log( "Hello " + this.name );
    }
}

function greeting( callback ) {
    callback();
}

greeting( taro.hello ); 