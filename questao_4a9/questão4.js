const express = require("express");
const app = express();

// Rota GET inicial
app.get("/", (req, res) => {
    res.json({ mensagem: "Bem-vindo à nossa API!" });
});

// Ligando o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor Express rodando na porta 3000");
});
