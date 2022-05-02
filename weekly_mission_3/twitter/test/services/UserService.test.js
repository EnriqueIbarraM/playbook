const UserService = require ('./../../app/services/UserService')

describe("Test for UserService", () => {
    
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "the2cto", "Enrique")
        expect(user.username).toBe("the2cto")
        expect(user.name).toBe("Enrique")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });
})