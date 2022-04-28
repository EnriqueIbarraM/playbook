export default class Pokemon{
    constructor(name) {
        this.name = name
    }

    sayHello(message){
        console.log(`Mi Pokemon ${this.name} te saluda.`)
    }
}