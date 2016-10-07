var express = require('express');
var Grid = require('./model/grid');
console.log("Bienvenue au coding PoJo!");
var app = express(),
    port = 8090,
    grid = new Grid();

app.post("/power4/grid/:id", function (req, res) {
    var id = req.params.id;

    try {
        grid.addToken(id);
        res.status(201).json(grid.getCells());
    } catch (ex) {
        res.status(400).json({error: ex.message});
    }

});

app.get("/power4/grid", function (req, res) {
    res.status(200).json(grid.getCells());
});

app.listen(port, function () {
    console.log('Listening on ' + port)
});

module.exports = app;
