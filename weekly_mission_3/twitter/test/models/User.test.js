cosnt User = require('./../models/User')

desribe("Unit Test for User Class", () => {

    test('Create an User object', () => {
        //Aquí se invoca el código a utilizar en la app
        const user = new User(1, "the2cto", "Enrique", "Bio", "dateCreated", "lastUpdated")

        //Aquí se validan los resultados de ese código
        //Esta es una comparación que va a gualar el valor de la izquierda con el valor de la derecha (valor esperado)
        expect(user.id).toBe(1)
        expect(user.username).toBe("the2cto")
        expect(user.name).toBe("Enrique")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdated).toBe("lastUpdated")
    });
})