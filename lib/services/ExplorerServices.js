
const fs = require("fs");
class ExplorersServices{

    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission)
        return explorersByMission
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission)
        const usernamesInNode = explorersByMission.map ((explorer) => explorer.githubUsername)
        return usernamesInNode
    }
    static getExplorersUsernamesByMission(explorers, mission){
    }
}

module.exports = ExplorersServices