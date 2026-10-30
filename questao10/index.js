const express = require('express');
const app = express();

// MUDANÇA: Importamos o arquivo routes.js que criamos agora
const rotas = require('./routes'); 

// Configuração para o Express conseguir ler requisição em JSON
app.use(express.json());

// Regra 7: Middleware que registra no console o método e a URL
app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.url}`);
    next(); // Muito importante para não travar a requisição aqui!
});

// MUDANÇA: Avisamos ao servidor para usar as rotas que importamos ali em cima
app.use(rotas);

// REGRA 8: Middleware de erro 404 para rotas que não existem.
// Ele deve ficar AQUI, logo após as rotas válidas, para capturar o que sobrar.
app.use((req, res) => {
    res.status(404).json({ erro: "Página não encontrada." });
});

// O app.listen SEMPRE tem que ser o último bloco de código do arquivo principal.
// Liga o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor de jogos rodando na porta 3000!");
});
