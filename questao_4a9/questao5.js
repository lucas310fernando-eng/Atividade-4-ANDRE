const express = require("express");
const app = express();

app.get("/alunos/:id", (req, res) => {
    res.json({
        id: req.params.id
    });
});

app.listen(3000);

app.get("/disciplinas/:codigo", (req, res) => {
    res.json({
        codigo: req.params.codigo
    });
});