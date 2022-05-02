const User = require('./../models/user')

class UserService {
    
    static create(id, username, name) {
        return new User(id, username, name, "Sin bio")
    }

    static getInfo(user) {
        return Object.values(user) 
    }

    static updateUserName(user, newUserName){
        user.username = newUserName
    }

    static getAllUsernames(users) {
        const usersUserNames = users.map( user => user.username)
        return usersUserNames
    }
}

module.exports = UserService