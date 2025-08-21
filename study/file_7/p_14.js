const taro = { name: "Taro" };

function hello( greeting ){
    console.log( `${ greeting }, ${ this.name }` );
}

hello.call( taro, "Hello, " );
hello.apply( taro, ["Hello", "Taro"] ); 