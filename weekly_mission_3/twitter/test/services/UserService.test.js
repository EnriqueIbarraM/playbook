const UserService = require ('./../../app/services/UserService')

describe("Test for UserService", () => {
    
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "the2cto", "Enrique")
        expect(user.username).toBe("the2cto")
        expect(user.name).toBe("Enrique")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });

    test("2. Get info from an User object in a list", () => {
        const user = UserService.create(1, "the2cto", "Enrique")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("the2cto")
        expect(userInfoInList[2]).toBe("Enrique")
        expect(userInfoInList[3]).toBe("Sin bio")
    });

    test("3. Update username", () => {
        const user = UserService.create(1, "the2cto", "Enrique")
        UserService.updateUserName(user, "2cto")
        expect(user.username).toBe("2cto")
        console.log(user.username)
    });

    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "the2cto_1", "Enrique")
        const user2 = UserService.create(2, "the2cto_2", "Enrique")
        const user3 = UserService.create(3, "the2cto_3", "Enrique")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("the2cto_1")
        expect(usernames).toContain("the2cto_2")
        expect(usernames).toContain("the2cto_3")
    });
})