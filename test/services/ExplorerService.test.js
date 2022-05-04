const ExplorerService = require("./../../lib/services/ExplorerService")

describe("Test para ExplorerService", () => {
     test("1 Requerimiento: Calcular todos los explorers en una misión", () => {
         const explorers = [{ mission: "node" }];
         const explorersInNode = ExplorerService.filterByMission(explorers, "node");
         expect(explorersInNode.length).toBe(1);
     })
})