const Superhero = require("./../app/Superhero")


describe("Unit test for Superhero", () => {
    test('Case 1: Get a superhero', () => {
        const ironman = new Superhero("Iron Man", "Robert Downey Jr.", "Tony Stark")

        expect(ironman.name).toBe("Iron Man")
        expect(ironman.actor).toBe("Robert Downey Jr.")
        expect(ironman.heroName).toBe("Tony Stark")
        
    });
})