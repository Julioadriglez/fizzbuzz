// const Reader= require('./lib/utils/Reader')
const ExplorersServices = require('./lib/services/ExplorerServices')
// const explorers = Reader.readJsonFile("explorers.json")
const explorers = [{"name": "explorer1", "githubUsername":"ajolonauta1", "score":1,"mission": "node"},{"name": "explorer2", "githubUsername":"ajolonauta2", "score":5, "mission": "java"},{"name": "explorer3", "githubUsername":"ajolonauta3", "score":12,"mission": "node"}];

console.log(ExplorersServices.filterByMission(explorers, 'node'))
console.log(ExplorersServices.getAmountOfExplorersByMission(explorers,'node'))
console.log(ExplorersServices.getExplorersUsernamesByMission(explorers, 'node'))

const explorersInNode = ExplorersServices.getExplorersUsernamesByMission(explorers, "node")
console.log(explorersInNode)