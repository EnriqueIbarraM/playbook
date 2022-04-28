console.log("2) Creación de un objeto con propiedades")
const explorer = {
    name: "Enrique",
    age: 36,
    mission: "node JS",
    stack: ["js", "node", "react", "vue"],
    blog: {
        url: "github.com/enriqueibarram/blog",
        posts: 5
    } //this is an object
}

console.log(explorer)

console.log("Accediendo a las propiedades del objeto")
console.log(explorer.name)
console.log(explorer["name"])

const ajolonauta = {
    name: "Woopa",
    mission: "Node JS",
    sayHelloExplorer: function(){
        console.log("Soy el Ajolonauta, ¡Qué onda!")
    },
    tellMeMore: function(){
        //console.log(`Ajolonauta: ${this.name}`)
        return `Ajolonauta: ${this.name}`
    }
}
console.log("Ajolonauta:")
console.log(ajolonauta)
ajolonauta.sayHelloExplorer()
console.log(ajolonauta.tellMeMore())
console.log("Hey /n Hey")



