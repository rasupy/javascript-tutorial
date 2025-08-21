window.name = "Taro";
const which = () => {
    console.log( this.name );
}

const hanako = {
    name: "Hanako",
    callName() {
        which();
    }
}

hanako.callName(); // "Taro"