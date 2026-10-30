const express = require("express");
const app = express();

app.listen(3000);

app.get("/produtos", (req, res) => {
    res.json({
        categoria: req.query.categoria
    });
});