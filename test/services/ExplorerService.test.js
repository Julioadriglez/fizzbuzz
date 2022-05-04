const ExplorerServices = require('./../../lib/services/ExplorerServices')

describe("Pruebasa en ExplorerServices", () => {
    test("1. calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}, {mission: "node"}];
        const explorersInNode = ExplorerServices.filterByMission(explorers, "node")
        expect(explorersInNode.length).toBe(2)
    })
})