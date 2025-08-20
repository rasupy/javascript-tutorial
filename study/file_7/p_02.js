function chance() {
    let rand = Math.random();
    let result = null;

    if( rand < .5 ) {
        result = "成功";
    } else {
        result = "失敗";
    }

    return result;
}

console.log( chance() );