const UserView = require('./../../app/views/UserView')

describe("Test for UserView", () => {

    test("1. Return an error object when try to create a new user with an null payload", () => {
        const payload = null
        const result = UserView.createUser(payload)
        //https://jestjs.io/docs/using-matchers#strings
        expect(result.error).toMatch(/payload no existe/)
    });

    test("2. Return an error object when try to create a new user with a payload invalid properties", () => {
        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    });

    test("3. Return an error object when try to create a new user with a payload with missing properties", () => {
        const payload = {username: "Username"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    });

    test("4. Create a user by a given vald payload", () => {
        const payload = {username: "the2cto", id: 23, name: "J. Enrique"}
        const result = UserView.createUser(payload)
        expect(result.name).toBe("J. Enrique")
        expect(result.id).toBe(23)
        expect(result.username).toBe("the2cto")
        console.log(result.id)
        console.log(result.username)
        console.log(result.name)
    })
})