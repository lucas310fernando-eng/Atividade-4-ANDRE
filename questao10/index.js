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

// Rota 2: POST /jogos - Cadastra um novo jogo
app.post("/jogos", (req, res) => {
    // Pegamos os dados que chegaram no corpo da requisição
    const { titulo, plataforma, genero, anoLancamento } = req.body;

    // Regra 4: Verifica se algum campo ficou em branco
    if (!titulo || !plataforma || !genero || !anoLancamento) {
        return res.status(400).json({ erro: "Todos os campos (titulo, plataforma, genero, anoLancamento) são obrigatórios." });
    }

    // Monta o objeto do novo jogo com o ID atual
    const novoJogo = {
        id: proximoId,
        titulo: titulo,
        plataforma: plataforma,
        genero: genero,
        anoLancamento: anoLancamento
    };

    // Salva o jogo no nosso array de mentira
    jogos.push(novoJogo);
    
    // Aumenta o número do ID para o próximo jogo que for cadastrado
    proximoId++;

    // Regra 6: Retorna status 201 (Criado com sucesso) e mostra o jogo
    res.status(201).json(novoJogo);
});