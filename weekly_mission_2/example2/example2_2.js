console.log("POO")

//objeto de js
const woopa_obj = {
    name: "Woopa",
    mission: "Node JS",
    age: "12",
    color: "pink"
}

// Crear una clase
class Ajolonauta {
    constructor(name, mission, age, color){
        this.name = name
        this.mission = mission
        this.age = age
        this.color = color
    }

    sayHello() {
        return `Hey! Hello ${this.name} is saying Hello!`
    }
}

console.log(Ajolonauta)

const woopa = new Ajolonauta("Woopa", "Node JS", 18, "Pink") //Instanciar un objeto
console.log(woopa)
console.log(woopa.sayHello())

const wooper = new Ajolonauta("Wooper", "Java", 10, "Blue")
console.log(wooper.sayHello())



//const woopy = new Ajolonauta() 
//console.log(woopy) //

//const woopa_obj_js = {}
//console.log(woopa_obj_js)









