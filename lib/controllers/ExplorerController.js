const Reader = require('./../utils/Reader')
const ExplorerServices = require('./../services/ExplorerServices')
const FizzbuzzService = require('./../services/FizzbuzzService')

class ExplorerController{
    static getExplorersByMission(mission){
        const archivo  = Reader.readJsonFile("explorers.json")
        const explorer = ExplorerServices(archivo.mission)
        return explorer
    };
    
}