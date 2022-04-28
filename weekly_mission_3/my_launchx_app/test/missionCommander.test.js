const MissionCommander = require('./../app/missionComander');
describe("Unit Test for Mission Commander Class", () => {
    test('1) Create a mission Commander object', () => {
        //const result = 1 + 2
        //expect(result).toBe(3);
        const myMissionCommander = new MissionCommander("Woopa")
        expect(myMissionCommander.name).toBe("woopa");
    }); 
})