const express = require("express");
const ExplorerController= require("./../lib/controllers/ExplorerController");


const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
    res.json({message: "FizzBuzz Api Welcome"});
});

app.get("/v1/explorers/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorerInMission = ExplorerController.getExplorersByMission(mission);
    res.json(explorerInMission);

});

app.get("/v1/explorers/amount/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorerInMission = ExplorerController.getExplorersAmountByMission(mission);
    res.json({mission: req.params.mission, quantity: explorerInMission});

});

app.get("/v1/explorers/username/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorerInMission = ExplorerController.getExplorersUsernameByMission(mission);
    res.status(200).json(explorerInMission);

});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});