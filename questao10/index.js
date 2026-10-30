const express = require('express');
const app = express();

// Configuração para o Express conseguir ler requisição em JSON
app.use(express.json());

// Regra 7: Middleware que registra no console o método e a URL
app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.url}`);
    next(); // Muito importante para não travar a requisição aqui!
});

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

// Rota 3: GET /jogos/:id - Consulta um jogo específico pelo ID
app.get("/jogos/:id", (req, res) => {
    // Pega o ID que veio na URL e converte para número
    const idBuscado = Number(req.params.id);

    // Usa a função .find() para procurar um jogo com esse ID no nosso array
    const jogoEncontrado = jogos.find(jogo => jogo.id === idBuscado);

    // Regra 5: Se não encontrou nenhum jogo com esse ID, devolve erro 404
    if (!jogoEncontrado) {
        return res.status(404).json({ erro: "Jogo não encontrado." });
    }

    // Se achou o jogo, devolve os dados dele
    res.json(jogoEncontrado);
});

// Rota 4: PUT /jogos/:id - Atualiza todos os dados de um jogo
app.put("/jogos/:id", (req, res) => {
    const idBuscado = Number(req.params.id);
    const jogoEncontrado = jogos.find(jogo => jogo.id === idBuscado);

    // Regra 5: Retorna 404 se não achar
    if (!jogoEncontrado) {
        return res.status(404).json({ erro: "Jogo não encontrado." });
    }

    const { titulo, plataforma, genero, anoLancamento } = req.body;

    // Atualiza os dados do jogo encontrado
    jogoEncontrado.titulo = titulo || jogoEncontrado.titulo;
    jogoEncontrado.plataforma = plataforma || jogoEncontrado.plataforma;
    jogoEncontrado.genero = genero || jogoEncontrado.genero;
    jogoEncontrado.anoLancamento = anoLancamento || jogoEncontrado.anoLancamento;

    res.json(jogoEncontrado);
});

// Rota 5: DELETE /jogos/:id - Remove um jogo do catálogo
app.delete("/jogos/:id", (req, res) => {
    const idBuscado = Number(req.params.id);
    
    // findIndex procura a posição (índice) do jogo na lista. Se não achar, retorna -1
    const indexDoJogo = jogos.findIndex(jogo => jogo.id === idBuscado);

    // Regra 5: Retorna 404 se não achar
    if (indexDoJogo === -1) {
        return res.status(404).json({ erro: "Jogo não encontrado." });
    }

    // O método splice remove itens do array. Aqui removemos 1 item a partir daquela posição
    jogos.splice(indexDoJogo, 1);

    res.json({ mensagem: "Jogo removido com sucesso." });
});