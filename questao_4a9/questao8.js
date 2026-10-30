app.get("/alunos/:id", (req, res) => {
    const aluno = alunos.find(aluno => aluno.id === Number(req.params.id));
    if (!aluno) {
        return res.status(404).json({ mensagem: "Aluno não encontrado" });
    }
    res.json(aluno);
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ erro: "Erro interno no servidor" });
});