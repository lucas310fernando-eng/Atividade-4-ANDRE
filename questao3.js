const http = require("http");

const servidor = http.createServer((req, res) => {
    // Se a URL digitada for exatamente a barra (página inicial)
    if (req.url === "/") {
        res.end("Página inicial");
    } else {
        // Se for qualquer outra rota, muda o status para 404 e avisa que não encontrou
        res.statusCode = 404;
        res.end("Página não encontrada");
    }
});

servidor.listen(3000);