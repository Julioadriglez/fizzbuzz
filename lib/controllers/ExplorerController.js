const Reader = require('./../utils/Reader')
const ExplorerServices = require('./../services/ExplorerServices')
const FizzbuzzService = require('./../services/FizzbuzzService')

class ExplorerController {
    static getExplorersByMission(mission){
        const archivo  = Reader.readJsonFile("explorers.json")
        const explorer = ExplorerServices.filterByMission(archivo.mission)
        return explorer;
    };
    static getExplorersUsernameByMission(mission){
        const archivo  = Reader.readJsonFile("explorers.json")
        const explorer = ExplorerServices.getExplorersUsernamesByMission(archivo.mission)
        return explorer;
    };
    static getExplorersAmountByMission(mission){
        const archivo  = Reader.readJsonFile("explorers.json")
        const explorer = ExplorerServices.getAmountOfExplorersByMission(archivo.mission)
        return explorer
    }
}
 module.exports = ExplorerController