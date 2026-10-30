const express = require('express');
const app = express();

// Configuração para o Express conseguir ler requisição em JSON
app.use(express.json());

// Liga o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor de jogos rodando na porta 3000!");
});

// banco de dados de mentira (começa vazio)
let jogos = [];
// Variável para controlar o ID do próximo jogo que for cadastrado
let proximoId = 1; 

// Rota 1: GET /jogos - Lista todos os jogos
app.get("/jogos", (req, res) => {
    res.json(jogos);
});