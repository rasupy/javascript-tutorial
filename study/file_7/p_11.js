function hello( greeting ){
    console.log( greeting + this.name );
}

const taro = {
    name: "Taro"
}

const helloTaro = hello.bind( taro, "Hello, ");
helloTaro();