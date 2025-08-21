window.name = "Hanako";

function hello(){
    console.log( "hello " + this.name );
}

const taro = {
    name: "Taro",
    hello: hello
}

hello();
taro.hello();