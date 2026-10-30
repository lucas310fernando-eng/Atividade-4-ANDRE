const express = require("express");
const app = express();

app.listen(3000);

app.get("/produtos", (req, res) => {
    res.json({
        categoria: req.query.categoria
    });
});

app.post("/produtos", (req, res) => {
    res.json({
        nome: req.body.nome,
        preco: req.body.preco
    });
});