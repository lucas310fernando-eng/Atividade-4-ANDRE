const express = require('express');
const app = express();

// Configuração para o Express conseguir ler requisição em JSON
app.use(express.json());

// Liga o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor de jogos rodando na porta 3000!");
});
