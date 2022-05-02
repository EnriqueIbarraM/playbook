const UserService = require('./../services/UserService')

class UserView{

    static createUser(payload){
        if(payload === null){
            console.log("Error es null")
            return {error: "payload no existe"}
        } else if(typeof payload.username === 'string' && typeof payload.name === 'string' && typeof payload.id === 'number'){
            return payload
        } else {
            return {error: "necesitan tener un valor válido"}
        }
    }
}

module.exports = UserView