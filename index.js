const Reader= require('./lib/utils/Reader')
const ExplorersServices = require('./lib/services/ExplorerServices')
const explorers = Reader.readJsonFile("explorers.json")


console.log(ExplorersServices.filterByMission(explorers, 'node'))
console.log(ExplorersServices.getAmountOfExplorersByMission(explorers,'node'))