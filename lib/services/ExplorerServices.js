class ExplorersServices{

    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission)
        return explorersByMission
    }
    static getAmountOfExplorersByMission(explorers, mission){
    }
    static getExplorersUsernamesByMission(explorers, mission)
}

module.exports = ExplorersServices