const express = require("express");
const ExplorerController= require("./../lib/controllers/ExplorerController");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
    res.json({message: "FizzBuzz Api Welcome"});
});

app.get("/v1/explorers/:mission", (req, res) => {
    console.log(`Api Explorers requests ${new Date()}`);
    console.log(`Regresa explores con mission ${req.params.mission}`);
    const mission = req.params.mission;
    const explorerInMission = ExplorerController.getExplorersByMission(mission);
    res.status(200).json(explorerInMission);

});

// app.get("/v1/explorers/amount/:mission", (req, res) => {
//     console.log(`Api Explorers requests ${new Date()}`);
//     console.log(`Regresa numero de explorers en mission ${req.params.mission}`);
//     const mission = req.params.mission;
//     const explorerInMission = ExplorerServices.getAmountOfExplorersByMission(explorers, mission);
//     res.status(200).json(explorerInMission);

// });

// app.get("/v1/explorers/username/:mission", (req, res) => {
//     console.log(`Api Explorers requests ${new Date()}`);
//     console.log(`Regresa nombre de explorers en mission ${req.params.mission}`);
//     const mission = req.params.mission;
//     const explorerInMission = ExplorerServices.getExplorersUsernamesByMission(explorers, mission);
//     res.status(200).json(explorerInMission);

// });

// app.get("/v1/explorers/fizzbuzz/:1", (req, res) => {
//     console.log(`Api Explorers requests ${new Date()}`);
//     const fizzbuzz= FizzbuzzService.applyValidationInExplorer(explorers);
//     res.status(200).json(fizzbuzz);
// });

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});