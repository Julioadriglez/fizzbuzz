class ExplorersServices{

    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersByMission;
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        return `Numero de exploradores en mision node: ${explorersByMission.length}`;
    }
    static getExplorersUsernamesByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        const usernamesInNode = explorersByMission.map ((explorer) => explorer.githubUsername);
        return usernamesInNode;
    }
}

module.exports = ExplorersServices;