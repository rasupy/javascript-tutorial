// クロージャ
function factory( greeting ) {
    function innerFn( name ) {
        console.log( greeting + " " + name );
    }
    return innerFn;
}

const hello = factory("こんにちは");
hello("太郎");

const bye = factory("さようなら");
bye("花子");