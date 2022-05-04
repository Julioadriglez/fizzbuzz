
const Reader= require('./../../lib/utils/Reader')
const ExplorerServices = require('./../../lib/services/ExplorerServices')

describe("Pruebasa en ExplorerServices", () => {
    test("1. calcular todos los explorers en una misión", () => {
        const explorers = [{"name": "explorer1","githubUsername": "ajolonauta1","score": 1,"mission": "node"},{"name": "explorer2","githubUsername": "ajolonauta2","score": 1,"mission": "java"}];
        const explorersInNode = ExplorerServices.getAmountOfExplorersByMission(explorers,'node')
        expect(explorersInNode).toBe("Numero de exploradores en mision node: 1")
    });
    test("2. Comparar si regresa lo sexplorers son de node",() => {
        const explorers = Reader.readJsonFile("explorers.json")
        const explorersByMission = explorers.filter((explorer) => explorer.mission === 'node')
        const usernamesInNode = explorersByMission.map ((explorer) => explorer.mission)
        expect(usernamesInNode).toContain('mode')
    })
})