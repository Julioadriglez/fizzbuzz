const Reader = require("../utils/Reader");
const ExplorerServices = require("../services/ExplorerServices");
const FizzbuzzService = require("../services/FizzbuzzService");
const explorers = Reader.readJsonFile("../explorers.json");
class ExplorerController {
    static getExplorersByMission(mission){
        
        const explorer = ExplorerServices.filterByMission(explorers, mission);
        return explorer;
    }
    static getExplorersUsernameByMission(mission){
        
        const explorer = ExplorerServices.getExplorersUsernamesByMission(explorers, mission);
        return explorer;
    }
    static getExplorersAmountByMission(mission){
        const explorer = ExplorerServices.getAmountOfExplorersByMission(explorers, mission);
        return explorer;
    }
    static gettApplyValidationInNumber(number){
        const trick = FizzbuzzService.applyValidationInNumber(number);
        return trick;
    }
}

module.exports = ExplorerController;