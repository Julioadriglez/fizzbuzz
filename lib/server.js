const express = require("express")
const Reader= require("./../lib/utils/Reader");
const ExplorerServices = require("./../lib/services/ExplorerServices");
const FizzbuzzService= require("./../lib/services/FizzbuzzService");
const explorers =  Reader.readJsonFile("./../explorers.json");

const app = express()
app.use(express.json())
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/v1/explorers/:mission', (req, res) => {
    console.log(`Api Explorers requests ${new Date()}`)
    console.log(`Regresaecplores con miiison ${req.params.mission}`)
    const mission = req.params.mission
    const explorerInMission = ExplorerServices.filterByMission(explorers, mission)
    res.json(explorerInMission)

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})