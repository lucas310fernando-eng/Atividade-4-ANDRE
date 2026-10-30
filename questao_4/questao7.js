const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get("/", (req, res) => {
    res.send("Página inicial");
});

app.listen(3000);

app.use((req, res, next) => {
    req.horario = new Date(); // Cria a data/hora atual e guarda dentro de 'req'
    next(); // Passa para a próxima etapa
});